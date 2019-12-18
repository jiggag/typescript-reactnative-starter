const fs = require('fs');
const path = require('path');
const data = require('./data');

const LANGUAGES = ['fr', 'en', 'ko'];

/**
 * @param languages 번역 지원 언어
 */
const translateLanguage = languages => {
  return languages.reduce((previous, current) => {
    // {} -> { 'fr': {} } -> { 'fr': {}, 'en': {} } -> { 'fr': {}, 'en': {}, 'ko': {} }
    previous[current] = {};
    return previous;
  }, {});
};

/**
 * @param translateJSON 파일로 변환하려는 json 객체
 */
const generateTranslation = translateJSON => {
  const translateKey = Object.keys(translateJSON); // hello, bye
  const translationJSON = translateLanguage(LANGUAGES);
  for (const trKey of translateKey) {
    const localizeKey = Object.keys(translateJSON[trKey]); // ko, en, fr
    for (const loKey of localizeKey) {
      translationJSON[loKey][trKey] = translateJSON[trKey][loKey];
    }
  }
  return translationJSON;
};

try {
  const jsonPath = path.join(__dirname, 'translation.json');
  fs.writeFileSync(jsonPath, JSON.stringify(generateTranslation(data)), 'utf8');
  // console.log('generate translation', jsonPath, 'success');
} catch (error) {
  // console.error(error);
}