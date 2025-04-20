import { useState } from 'react';

interface FormState {
    searchText: string;
}

export const useForm = ( initialForm: FormState ) => {
  
    const [ formState, setFormState ] = useState<FormState>( initialForm );

    const onInputChange = ({ target }: { target: { name: string; value: string } }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}