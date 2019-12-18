import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { render } from 'react-native-testing-library';
import { Home } from '../../src/containers/Home';
import { User } from '../../src/types';

Enzyme.configure({ adapter: new Adapter() });

const createTestProps = (props?: object) => ({
  fetchUser: jest.fn(),
  user: {},
  ...props,
});

jest.mock('react-redux', () => {
  return {
    connect: jest.fn().mockReturnValue(() => jest.fn()),
  };
});
jest.mock('../../src/actions/users', () => {
  return {
    fetchUser: jest.fn().mockReturnValue('mock user action'),
  };
});

jest.mock('NativeModules', () => {
  return {
    ReactLocalization: {
      language: 'en',
    },
  };
});

describe('Home', () => {
  const props: any = createTestProps({
    navigation: {
      navigate: jest.fn(),
    },
  });
  const { fetchUser, user, navigation } = props;
  let wrapper;
  it('초기 렌더링 성공', () => {
    wrapper = render(<Home {...props} />);
  });

  it('초기 스냅샷 일치', () => {
    const { toJSON } = wrapper;
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render a welcome', () => {
    const { getByText } = wrapper;
    expect(getByText(/welcome/i)).toBeDefined();
    expect(getByText(/Hello/i)).toBeDefined();
  });

  it('should call fetchUser', () => {
    fetchUser();
    expect(fetchUser).toBeCalled();
  });

  it('should call navigation', () => {
    // () => navigation.navigate()
  });

});

describe('ConnectedHome', () => {
  const mockConnect = require('react-redux').connect;
  const mapStateToProps = mockConnect.mock.calls[0][0];
  it('should map user from state to props', () => {
    const user = { id: '1' };
    const mockState = { users: { user } };
    const props = mapStateToProps(mockState);

    expect(props.user).toEqual(user);
  });
});
