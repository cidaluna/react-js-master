const Challenge = () => {
    const a = 100;
    const b = 5;
    const c = 1;

    const soma = () => { 
        console.log('Clicou no botão soma');
        console.log('A soma eh = ',a+c);
    }
    
    return(
        <>
        <h3>Valor de a = {a}</h3>
        <h3>Valor de b = {b}</h3>
        <button onClick={soma}>Veja a soma</button>
        </>
    );
};

export default Challenge;