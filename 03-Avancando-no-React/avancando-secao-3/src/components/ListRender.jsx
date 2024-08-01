import { useState } from 'react';

const ListRender = () => {
    const [list] = useState(["Cida","Maria","Nataly"]);

    const [users, setUsers] = useState([
        {id: 1, name:"Cida", age: 37},
        {id: 2, name:"Joana", age: 27},
        {id: 3, name:"Matheus", age: 17},
    ]);

    // utilizando o previous state
    const deleteRandom = () =>{
      // recuperar um número de 0 a 3 (total de itens da lista) e arredonda para baixo
      const randomNumber = Math.floor(Math.random() * 4);
      // acessa os índices 0,1,2 da lista
      // aplica o delete
      setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id);
      });
    };

    const [cars] = useState([
        {id: 451, name:"C40", brand:"Volvo"},
        {id: 456, name:"Gol", brand:"Volkswagen"},
        {id: 458, name:"C200", brand:"Mercedes Benz"},
        {id: 500, name:"T-Cross", brand:"Volkswagen"},
    ]);

    const listCars = cars.map((item) => (
        <li key={item.id}>{item.name} - {item.brand}</li>
    ));

    const jokes = [
      {id: 151, joke: "abc asd", rating: 4},
      {id: 158, joke: "hrd asd", rating: 1},
      {id: 155, joke: "lun asd", rating: 5},
      {id: 156, joke: "lok asd", rating: 4},
    ];  

    const myList = ['item1', 'item2', 'item3'];
    const myComponentList = [];
    myList.forEach((item, index) => {
      myComponentList.push(<li key={index}>{item}</li>); // prefira o índice único que vem do BD
    });

    const [count, setCount] = useState(0);
    function handleIncrement() {
      setCount(prevCount => prevCount + 1);
    }
    
  return (
    <div>
      <ul>
      <h2>List users:</h2>
        {/* Geralmente o id (identificador único) vem do banco de dados, no exemplo abaixo temos no console 
            o Warning "Each child in a list should have a unique "key" prop,
            pedindo para atribuir um índice único em cada elemento da lista 
        */}
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
      <h2>All users:</h2>
        {users.map((item) => (
          <li key={item.id}>
            {item.name}, tem {item.age} anos.
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
      <div>
        <ul>
        <h2>All cars:</h2>
            {listCars}
        </ul>
      </div>
      <div>
        <ul>
          <h2>All jokes:</h2>
          {
            jokes.map((joke) => (
            <li key={joke.id}>
              {joke.joke} - {joke.rating} stars.
            </li>
          ))
          }
        </ul>
        <ul>
          <h2>Just jokes + 3 stars:</h2>
          {
            jokes.filter(joke => joke.rating > 3).map((joke) => (
            <li key={joke.id}>
              {joke.joke} - {joke.rating} stars.
            </li>
          ))
          }
        </ul>
      </div>
      <div>
        <ul>
        <h2>All items:</h2>
            {myComponentList}
        </ul>
      </div>
      <div>
        <button onClick={handleIncrement}>Count: {count}</button>
      </div>
    </div>
  );
}

export default ListRender
