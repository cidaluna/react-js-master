# React

React é uma biblioteca Javascript para desenvolvimento de aplicações SPA(Single Page Application) Front-end que utiliza uma arquitetura baseada em componentes.

O Node.js é uma runtime de Javascript, ou seja, uma biblioteca utilizada por um compilador durante a execução do programa. Construida na V8 engine (escrita em C++ com alta performance) do Google e possibilita criar softwares em JS no lado do servidor.

O npm é um gerenciador de pacotes do Node, que permite baixar bibliotecas de terceiros e executar scripts desenvolvidos na aplicação.

<p align="center">
  <img src="images/react-logo-do-zero-a-maestria.svg" width="200">
</p>

## 📚 <a id="table-of-contents">Conteúdo</a>

1. **[Introducao](#1-introducao)**
2. **[Fundamentos do React](#2-fundamentos-do-react)**
3. **[Avancando no React](#3-avancando-no-react)**



## 1. Introducao

Gerar uma nova aplicação via npx: "npx create-react-app <nome>"

Instalação com o Vite: "npm create vite@latest"

Nome do projeto: hello-world-2

Escolher: React e Javascript

Entrar na pasta da nova aplicação e rodar "npm install" e "npm run dev"

- Links:
- [React] (https://react.dev/)

### Desafio 1
1. Entre no arquivo App.js e adicione mais algum elemento HTML da sua escolha;
2. Crie uma regra de estilos em App.css que altere a cor do seu elemento;
3. Vá até o arquivo index.html e altere o título da aplicação na meta tag; 

## 2. Fundamentos do React

JSX é o HTML do React. Onde declaramos as tags HTML que serão exibidas no navegador e ficam no return do componente.
Algumas propriedades mudam no JSX como o class no HTML, no JSX deve ser utilizado className.

Para fazer comentário no JSX:
```jsx
{ /* Comentários */ }
```

Template expressions é o recurso que permite executar Javascript no JSX e também interpolar variáveis.

Exemplo:
```jsx
{ algumCódigoJS }
```
 

### Desafio 2
1. Crie um componente chamado Challenge;
2. Importe-o em App.js;
3. No componente criado faça a criação de dois valores numéricos;
4. Imprima este valores no componente;
5. Crie também um evento de click que soma estes dois valores e exibe no console;

## 3. Avancando no React

Podemos utilizar os eventos como onClick para acessar uma função. As funções geralmente tem o padrão de nomenclatura handleAlgumaCoisa.

### Desafio 3
1. Crie um projeto para a nova seção;
2. Limpe o arquivo do componente principal;
3. Coloque o título de seção 3;


Hooks são funções do React que permitem por exemplo guardar e alterar o estado de algum dado, o ciclo de vida, entre outros recursos, nos componentes funcionais. Todos os hooks começam com "use", por exemplo useState, e com o hook é possível re-renderizar o componente.

Sintaxe do hook:
```jsx
const [elemento, setElemento] = useState(valorInicial)
```

### Renderizar lista no React:
Evitar o Warning: "Each child in a list should have a unique 'key' prop." Para isso, utilize sempre um identificador único (índice único) como chave de cada elemento da lista. Geralmente o id único vem do BD.
Para uma melhor performance utilize o método map() do primeiro exemplo.

#### Utilizando método array.map()
```jsx
const jokes = [
  {id: 151, joke: "abc asd", rating: 4},
  {id: 158, joke: "hrd asd", rating: 1},
  {id: 155, joke: "lun asd", rating: 5},
  {id: 156, joke: "lok asd", rating: 4},
];

return (
  <ul>
    {
      jokes.map((joke) => (
      <li key={joke.id}>
        {joke.joke} - {joke.rating}.
      </li>
    ))
    }
  </ul>
);
```

```jsx
const myList = ['item1', 'item2', 'item3'];
const myComponentList = myList.map((item, index) => (
  <li key={index}>{item}</li>
));

return (
  <ul>
    {myComponentList}
  </ul>
);
```

### Utilizando método Array.forEach()
```jsx
const myList = ['item1', 'item2', 'item3'];
const myComponentList = [];

myList.forEach((item, index) => {
  myComponentList.push(<li key={index}>{item}</li>);
});

return (
  <ul>
    {myComponentList}
  </ul>
);
```

### Previous state
Exemplo implementando um contador que aumenta com base no estado anterior:
```jsx
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(prevCount => prevCount + 1);
  }
  return (
    <div>
      <button onClick={handleIncrement}>Count: {count}</button>
    </div>
 );
```

### Props
As props são propriedades que permitem passar dados do componente pai para um componente filho (unidirecional).
Exemplo:

App.jsx
```jsx
  function App() {
  const avatar = "https://i.imgur.com/1bX5QH6.jpg";
  const alt = "Test image";
  const user = "Lin";

  return (
    <div>
      <h1>Trabalhando com props:</h1>
      <Profile avatarUrl={avatar} avatarAltText={alt} avatarUser={user} /> 
    </div> 
  );
};
export default App
```

Profile.jsx
```jsx
const Avatar = (props) => {
  const {imageU, altT} = props;

  return (
    <div>
      <img src={imageU}
          alt={altT} 
          className="avatar"
          width={100}
          height={100}
      />
    </div>
  );
};

const Profile = (props) => {
  const {avatarUrl, avatarAltText, avatarUser} = props;

  return(
    <div className="profile">
      <Avatar imageU={avatarUrl} altT={avatarAltText} />
      <p>Username: {avatarUser}</p>
    </div>
  )
}
export default Profile;
```

### Destructuring
A desestruturação permite desorganizar valores e propriedades de objetos em variáveis distintas. Ou seja, permite extrair do objeto apenas as dados que preciso.
Observe no exemplo abaixo que não precisamos mais passar o props e recuperar props.brand, props.km, etc.

```jsx
const CarDetails = ({brand, km, color}) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        {/* O uso de destructuring facilita a escrita do código e mantemos o mesmo nome da propriedade, utilizando apenas as props necessárias para personalizar e renderizar os componentes */}
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      <p>Meu carro é um {brand} {color}.</p>
    </div>
  )
}
```

### React Fragments
Possui a sintaxe de uma tag vazia <> </>. React fragment é utilizado quando desejamos envolver um conteúdo HTML no JSX, mas, sem precisar adicionar mais uma div ou envolver o conteúdo em um elemento (nó) extra no DOM.
Ele irá ganhar o elemento pai que estiver mais externo, resultando numa estrutura mais limpa e eficiente.

Exemplo:
```jsx
function Post() {
  return (
    <>
      <PostTitle />
      <PostBody />
    </>
  );
}
```

### Children prop
É um recurso utilizado quando um componente precisa ter JSX dentro dele. Porém, este JSX vem do componente pai. Então, o componente age como um container, abraçando estes elementos. Children é considerada uma prop do componente.
Exemplo:

App.jsx
```jsx
  <Container>
    <p>E este é o conteúdo do container!</p>
  </Container>
```

Container.jsx
```jsx
const Container = ({ children }) => {  {/* Lembrar de desestruturar children */ }
  return (
    <div>
      <h2>Este é o título do container</h2>
      {children}  {/* Aqui será renderizado o conteúdo */}
    </div>
  )
}
```

### Funções em props
As funções podem ser passadas para as props normalmente. Basta criar a função no componente pai e enviar como prop para o componente filho. No filho ela pode ser ativada por evento por exemplo.
Exemplo:

App.jsx
```jsx
 function showMessage(){
    console.log('Evento do componente pai!');
  }
  return(
    <h1>Função como prop:</h1>
    <ExecuteFunction myPropFunction={showMessage} />
  )
```

ExecuteFunction.jsx
```jsx
const ExecuteFunction = ({ myPropFunction }) => {
  return (
    <div>
      <button onClick={myPropFunction}>Clique aqui para executar a função</button>
    </div>
  )
}
```

### State lift
O state lift ou elevação do state, é quando um estado é movido para o componente pai, para que o estado seja manipulado ou compartilhado com todos os componentes filhos que desejam acessá-lo. Ou seja, quando os componentes filhos precisam compartilhar do mesmo estado, centralizado e propagado na aplicação.

### Desafio 4
1. Crie um array de objetos compostos de pessoas, com as propriedades de nome, idade e profissão (array com pelo menos 3 itens);
2. Os dados devem ser exibidos em um componente UserDetails, que você deve criar, todas as informações devem ser exibidas;
3. Faça uma renderização condicional que exibe se o usuário pode tirar carteira de habilitação ou não, imprima isso também no componente UserDetails;
4. A informação pode ser exibida num parágrafo (checar se idade >= 18);



**[⬆ Back to Top](#table-of-contents)**

---
