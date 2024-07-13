const Challenge = () => {
    const a = 100;
    const b = 5;

    const soma = (a,b) => { 
        const s = a+b;
        console.log('Clicou no botão soma');
        console.log('A soma eh = ',s);
    }
    
    return(
        <>
        <h3>Valor de a = {a}</h3>
        <h3>Valor de b = {b}</h3>
        <button onClick={soma(a,b)}>Veja a soma</button>
        </>
    );
};

export default Challenge;