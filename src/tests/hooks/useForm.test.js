import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';


describe('Tests on useForm Hook', () => {

    const initialForm = {
        name: 'Jose D',
        email: 'email@email.com'
    }


    test('should return default form', () => {
        const { result } = renderHook(() => useForm( initialForm ));

        const [ formValues, handleInputChange, reset ] = result.current;

        expect(formValues).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');
    });
    
    test('should udpdate form values', () => {
        const { result } = renderHook(() => useForm( initialForm ));

        const [ , handleInputChange ] = result.current;

        // necesary to send target object
        const newName = {
            target: {
                name: 'name',
                value: 'jorgito'
            }
        }

        act(() => {
            handleInputChange( newName );
        });

        const [values] = result.current;

        expect( values.name ).toBe( newName.target.value )

    });
    
    test('should reset form values to initialValue', () => {
        const { result } = renderHook(() => useForm( initialForm ));

        const [ , handleInputChange, reset ] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'jorgito'
                }
            });
            
            reset();

        });

        const [values] = result.current;

        expect( values ).toEqual( initialForm )

    });
    
});