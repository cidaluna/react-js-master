const TemplateExpressions = () => {
    const name = "Cida";
    const data = {
        age: 37,
        job: "Programmer",
    };

    return(
        <div>
            <p>Olá {name}, tudo bem ?</p>
            <p>Você atua como: {data.job}</p>
            <p>{ 4 + 4 }</p>
            <p>{ console.log("JSX React") }</p>
        </div>
    );
};

export default TemplateExpressions;