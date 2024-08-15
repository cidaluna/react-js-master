import { useEffect, useState } from 'react';

export const useFetch = (url) => {
   // 4 - custom hook para resgatar os dados
   const [data, setData] = useState(null);

    // 5 - refatorando o post, configurar o cabeçalho e body, os métodos, e chamar o fetch de dados atualizados
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(data),
            });
            setMethod(method);
        }
    };

   useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
    };
    fetchData();
   }, [url, callFetch]);

   // 5 - refatorando o post
   useEffect(() => {
    const httpRequest = async () => {
        if(method === "POST"){
            let fetchOptions = [url, config];
            const res = await fetch(...fetchOptions);
            const json = await res.json();
            setCallFetch(json);
        }
       }
       httpRequest();
    }, [config, method, url]);
    return { data, httpConfig };
}
