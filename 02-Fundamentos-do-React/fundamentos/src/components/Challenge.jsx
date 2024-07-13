const Challenge = () => {
    const a = 100;
    const b = 5;
    const c = 1;

    const handleSum = () => { 
        console.log('Clicou no botão soma');
        console.log('A soma eh = ',a+c);
    }
    
    return(
        <>
        <h3>Valor de a = {a}</h3>
        <h3>Valor de b = {b}</h3>
        <button onClick={handleSum}>Clique aqui para somar</button>
        <p>Veja a soma no console!!</p>
        </>
    );
};

export default Challenge;