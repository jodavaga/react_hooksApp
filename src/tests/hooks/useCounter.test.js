import { renderHook, act } from '@testing-library/react-hooks';

import { useCounter } from '../../hooks/useCounter';


describe('Test on useCounter Hook', () => {


    test('should return initialvalue and functions', () => {
        
        const {result} = renderHook( () => useCounter() );

        expect(result.current.counter).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
    });
    
    test('should return argument value', () => {
        
        const {result} = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect( counter ).toBe(100);
    });
    
    test('should increment value', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        act(() => {
            increment();
        });

        expect( result.current.counter ).toBe(101)
    });
    
    test('should increment value by the given num', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        act(() => {
            increment(10);
        });

        expect( result.current.counter ).toBe(110)
    });
    
    test('should decrement value', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act(() => {
            decrement();
        });

        expect( result.current.counter ).toBe(99);
    });
    
    test('should reset counter to initialValue', () => {

        const initialValue = 100;
        
        const { result } = renderHook( () => useCounter( initialValue ) );
        const { increment, reset } = result.current;

        act(() => {
            increment(10);
            reset();

        });

        expect( result.current.counter ).toBe( initialValue );
    });


    
})