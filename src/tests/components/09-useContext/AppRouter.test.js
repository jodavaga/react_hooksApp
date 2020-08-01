import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';

import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Test on <LoginPage />', () => {

    const user = {
        username: 'Jose D.',
        password: '12345'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('should render component', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    
})
