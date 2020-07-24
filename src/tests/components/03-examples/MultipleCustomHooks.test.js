import React from 'react';
// just to get helps
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Test on <MultipleCustomHooks />', () => {
    
    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    });

    test('should render component initialState', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        

        const wrapper = shallow( <MultipleCustomHooks /> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('should render fetch information', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Jose D',
                quote: 'Hola mundo!'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        // console.log( wrapper.html() );

        expect( wrapper.find('.blockquote').exists() ).toBe(true);
        expect( wrapper.find('p').text().trim() ).toBe('Hola mundo!');
        expect( wrapper.find('footer').text().trim() ).toBe('Jose D');
    });
    
    
})


