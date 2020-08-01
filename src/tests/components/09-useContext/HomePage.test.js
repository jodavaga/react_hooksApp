import React from 'react';
import { mount } from 'enzyme';
import { HomePage } from '../../../components/09-useContext/HomePage';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Test on <HomePage />', () => {

    const user = {
        name: 'Jose D.',
        email: 'email@mail.com'
    }

    test('should render component', () => {
        
        // this way we dont have access to complete child components
        // const wrapper = shallow(
        //     <UserContext.Provider>
        //         <HomePage />
        //     </UserContext.Provider>
        // );

        // using mount will render all child components included in <HomePage />
        const wrapper = mount(
            <UserContext.Provider value={{
                user
            }}>
                <HomePage />
            </UserContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
    });
    
    
})
