import { useEffect, useState } from 'react';
import styles from './ResourceType.module.css';

const ResourceType = () => {
    const [resourceType, setResourceType] = useState("todos");
    const [items, setItems] = useState([]);
    const changeResourceType = (resource) => {
        setResourceType(resource);
    };

    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => console.log(json))
        console.log("resource type changed");
    }, [resourceType]);  // ao passar a lista este useEffect só será executado quando o valor de resourceType mudar


    // quando for necessário usar async await dentro do useEffect:
    useEffect(() => {
        const fetchResourceTypes = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/${resourceType}`
            );
            const responseJSON = await response.json();

            //console.log(responseJSON);
            setItems(responseJSON);
        };
        fetchResourceTypes();
    }, [resourceType]);

  return (
    <>
      <h2 className={styles.resource}>Resource Type com useEffect:</h2>
      <p>{resourceType}</p>
      <div>
        <button className={styles.btn} onClick={() => changeResourceType("posts")}>Posts</button>
        <button className={styles.btn} onClick={() => changeResourceType("comments")}>Comments</button>
        <button className={styles.btn} onClick={() => changeResourceType("todos")}>Todos</button>
        <ul>
          {
            items.filter(item => item.id < 5).map((item) => (
            <li key={item.id}>
              {item.title}
            </li>
          ))
          }
        </ul>
      </div>
    </>
  )
}

export default ResourceType
