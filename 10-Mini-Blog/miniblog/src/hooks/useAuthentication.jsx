import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase/config';

const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // cleanup - para limpar dados
    // deal with memory leak - evitar vazamento de memória
    const [cancelled, setCancelled] = useState(false);

    //const auth = getAuth();

    function checkIfIsCancelled(){
        if(cancelled){
            return;
        }
    }

    // register
    const createUser = async(data) => {
        checkIfIsCancelled();
        setLoading(true);
        setError(null);
        try{
            const { user } = await createUserWithEmailAndPassword(
                // these parameters are mandatory to get user information
                auth,
                data.email,
                data.password
            );

            // firebase saves user info by updating the existent data. We must send the user and the displayName
            await updateProfile(user, {
                displayName: data.displayName
            });
            setLoading(false);
            return user;
        }catch(error){
            // if error occurs
            console.error("Erro ao criar: ", error);
            console.error(typeof error.message);

            let systemErrorMessage;
            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa ter pelo menos 6 caracteres.";
            }else if(error.message.includes("email-already")){
                systemErrorMessage = "E-mail já cadastrado!";
            }else{
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde";
            }
            setError(systemErrorMessage);
        } finally{
            setLoading(false);
        }
    };

    // useEffect to set cancelled as true and avoid memory leak
    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return{
        auth,
        createUser,
        error,
        loading
    };
};

export default useAuthentication
