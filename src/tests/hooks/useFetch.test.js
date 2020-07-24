import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';



describe('Test on useFetch custom hook', () =>{

    test('should return initial state', () => {
        
        const {result} = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));

        const {data, loading, error} = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);

    });

    test('should return data, loading and error: null', async () => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));

        await waitForNextUpdate();

        const {data, loading, error} = result.current;

        expect( data.length ).toBe(1);
        expect( loading ).toBe(false);
        expect( error ).toBe(null);

    });
    
    test('should hanlde error', async () => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users/2'));

        await waitForNextUpdate();

        const {data, loading, error} = result.current;

        expect( data ).toBe(null);
        expect( loading ).toBe(false);
        expect( error ).toBe('Algo salio mal');

    });
    

})