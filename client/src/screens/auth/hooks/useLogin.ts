import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function useLogin() {

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm();

    const [loading, setLoading] = useState<boolean>(false);
    const route =useRouter()

    console.log('values == ', watch())

    const onLogin = () => {

    }

    return {
        control, handleSubmit, onLogin,loading,route
    }
}

export default useLogin