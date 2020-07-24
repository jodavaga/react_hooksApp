import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test on todoReducer', () => {
    

    test('should return default state', () => {

        const state = todoReducer( demoTodos, {} );

        expect( state ).toEqual( demoTodos )
        
    });

    test('should return new state with added todo', () => {

        const action = {
            type: 'add',
            payload: {
                id: 3,
                desc: 'Estudiar React Native',
                done: false
            }
        }
        const state = todoReducer( demoTodos, action );

        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [...demoTodos, action.payload] );
        
    });

    test('should delete todo', () => {

        const action = {
            type: 'delete',
            payload: 2
        }

        const state = todoReducer( demoTodos, action );

        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [ demoTodos[0] ] );
        
    });
    
    test('should update todo done: true', () => {

        const action = {
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer( demoTodos, action );

        expect( state[0].done ).toBe( true );
        expect( state[1] ).toBe( demoTodos[1] );
        
    });


    
})
