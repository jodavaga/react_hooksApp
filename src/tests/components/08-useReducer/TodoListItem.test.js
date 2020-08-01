import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test on <TodoListItem />', () => {
    
    const index = 0
    const todo = demoTodos[ index ];
    const handleComplete = jest.fn();
    const handleDelete = jest.fn();
    
    const wrapper = shallow( 
        <TodoListItem 
            todo={ todo }
            index={ index }
            handleComplete={ handleComplete }
            handleDelete={ handleDelete }
        /> 
    );

    test('should render component', () => {
        expect( wrapper ).toMatchSnapshot();
        expect(wrapper.exists('p')).toBe(true);
    });

    test('should contian <p> with correct text', () => {
        const pTag = wrapper.find('p');
        const text = `${ index +1 }. ${ todo.desc }`;

        expect( pTag.text()).toBe(text);
    });

    test('should delete todo on click button', () => {

        const btn = wrapper.find('button');
        
        btn.simulate('click');

        expect( handleDelete ).toHaveBeenCalled( );
        expect( handleDelete ).toHaveBeenCalledWith( todo.id );
    });

    test('should call handleComplete fn', () => {

        const pTodo = wrapper.find('p');

        pTodo.simulate('click');
        
        expect( handleComplete ).toHaveBeenCalled();
        expect( handleComplete ).toHaveBeenCalledWith( todo.id );
        
    });  

    test('todo item should has complete class', () => {

        const todo = demoTodos[1];
        todo.done = true;

        const wrapper = shallow( 
            <TodoListItem 
                todo={ todo }
            /> 
        );
        
        expect( wrapper.find('p').hasClass('complete') ).toBe(true);
        
    });  
    
})
