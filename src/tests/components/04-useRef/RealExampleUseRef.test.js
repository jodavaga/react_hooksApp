import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleUseRef } from '../../../components/04-useRef/RealExampleUseRef';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';


describe('Test on <RealExampleUseRef />', () => {
    
    const wrapper = shallow( <RealExampleUseRef /> );
    
    test('should render component', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);
    });

    test('should display <MultipleCustomHooks />', () => {

        wrapper.find('button').simulate('click');

        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);
    });
    
    
})
