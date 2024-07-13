const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log('Ativou o evento!');
    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando isso!</h1>
        }else{
            return <h1>Também posso renderizar isso!</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => {console.log('Clicou!')}}>Clique Aqui Também!</button>
            </div>
            <div>
                <button onClick={() => {
                    if(true){
                        console.log('Isso não deveria exisitir! Separe a lógica em uma função!!!');
                    }
                }}>Clique Aqui, Por Favor!</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    );
};

export default Events;