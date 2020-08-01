import React from 'react';
import '@testing-library/jest-dom';
import { TodoAddForm } from '../../../components/08-useReducer/TodoAddForm';
import { shallow } from 'enzyme';

describe('Tests on <TodoAddForm />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAddForm 
            handleAddTodo={ handleAddTodo }
        />
    );

    test('should render component', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should NOT call addTodo function', () => {
        
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit( {  preventDefault(){} } );

        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
    });

    test('should call addTodo function', () => {

        const value = 'Aprender Graphql';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });
        
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit( {  preventDefault(){} } );

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        // should been called with object containing a number as id
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

        // form should be reset
        expect( wrapper.find('input').prop('value') ).toBe('');

    });
    
    
})
