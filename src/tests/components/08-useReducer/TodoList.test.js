import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('test on <TodoList />', () => {

    const handleDelete = jest.fn();
    const handleComplete = jest.fn();
    
    const wrapper = shallow( 
        <TodoList 
            todos={ demoTodos }
            handleDelete={ handleDelete }
            handleComplete={ handleComplete }
        /> 
    );

    test('should render component', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should have demoTodos.length amount of <TodoListItem />', () => {
        
        const todoItems = wrapper.find('TodoListItem');

        expect( todoItems.length ).toBe( demoTodos.length );
        // console.log( todoItems.at(0).props() )
        expect( todoItems.at(0).prop('handleDelete') ).toEqual( expect.any( Function ) );

    });
    
    test('should not render TodoListItems if not todos', () => {
        
        const wrapper = shallow( 
            <TodoList 
                todos={ [] }
                handleDelete={ handleDelete }
                handleComplete={ handleComplete }
            /> 
        );

        expect( wrapper.exists('.todo-list') ).toBe(false);
    });
    
})
