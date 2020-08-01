import React from 'react';
import { mount } from 'enzyme';

import { LoginPage } from '../../../components/09-useContext/LoginPage';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Test on <LoginPage />', () => {

    const user = {
        username: 'Jose D.',
        password: '12345'
    }
    const setUser = jest.fn();
    // using mount will render all child components included in <HomePage />
    const wrapper = mount(
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <LoginPage />
        </UserContext.Provider>
    );

    test('should render component', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should setUser on submit', () => {
        

        const formSubmit = wrapper.find('form').prop('onSubmit');
        // simulate submit
        formSubmit({ preventDefault(){} });


        expect(setUser).toHaveBeenCalled();
    });
    
    
})
