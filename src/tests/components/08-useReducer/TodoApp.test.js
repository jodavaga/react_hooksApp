import React from 'react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('test on <TodoApp />', () => {

    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn(() => {});
    
    test('should render component', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should add todos', () => {
        const wrapper = mount( <TodoApp /> );

        act(() => {
            // console.log( wrapper.find('TodoAddForm').prop('handleAddTodo') );
            // this prop is a funciton that could be called directly
            wrapper.find('TodoAddForm').prop('handleAddTodo')( demoTodos[1] );
            wrapper.find('TodoAddForm').prop('handleAddTodo')( demoTodos[0] );
        });

        
        expect(  wrapper.find('h1').text().trim() ).toBe('Todo APP - (3)');
        // should be called addTodo() times
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
        
    });

    test('should delete todo', () => {
        const wrapper = mount( <TodoApp /> );

        act(() => {
            // adds 1 todo and inmediatly delete it
            wrapper.find('TodoAddForm').prop('handleAddTodo')( demoTodos[1] );
            wrapper.find('TodoList').prop('handleDelete')( demoTodos[1].id );
        });

        
        expect(  wrapper.find('h1').text().trim() ).toBe('Todo APP - (1)');
        
    });
    
})
