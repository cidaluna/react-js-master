import { useState } from 'react';

const ListRender = () => {
    const [list] = useState(["Cida","Maria","Nataly"]);

    const [users] = useState([
        {id: 123, name:"Cida", age: 37},
        {id: 154, name:"Joana", age: 27},
        {id: 158, name:"Matheus", age: 17},
    ])

    const [cars] = useState([
        {id: 451, name:"C40", brand:"Volvo"},
        {id: 456, name:"Gol", brand:"Volkswagen"},
        {id: 458, name:"C200", brand:"Mercedes Benz"},
        {id: 500, name:"T-Cross", brand:"Volkswagen"},
    ]);

    const listCars = cars.map((item) => (
        <li key={item.id}>{item.name} - {item.brand}</li>
    ));

    const myList = ['item1', 'item2', 'item3'];
    const myComponentList = [];
    myList.forEach((item, index) => {
      myComponentList.push(<li key={index}>{item}</li>); // prefira o índice único que vem do BD
    });
    
  return (
    <div>
      <ul>
        {/* Geralmente o id (identificador único) vem do banco de dados, no exemplo abaixo temos no console 
            o Warning "Each child in a list should have a unique "key" prop,
            pedindo para atribuir um índice único em cada elemento da lista 
        */}
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.name}, tem {item.age} anos.
          </li>
        ))}
      </ul>
      <div>
        <ul>
            {listCars}
        </ul>
      </div>
      <div>
        <ul>
            {myComponentList}
        </ul>
      </div>
    </div>
  );
}

export default ListRender
