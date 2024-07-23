import styles from './Challenge5CSS.module.css';

const Challenge5CSS = () => {
    const listCars = [
        {id: 451, name:"C40", brand:"Volvo"},
        {id: 456, name:"Gol", brand:"Volkswagen"},
        {id: 458, name:"C200", brand:"Mercedes Benz"},
        {id: 500, name:"T-Cross", brand:"Volkswagen"},
    ];
  return (
    <>
      <ul>
        {
            listCars.map((car) => (
            <li className={styles.myCar} key={car.id}>
                {car.name} - {car.brand}.
            </li>
            ))
        }
    </ul>
    </>
  )
}

export default Challenge5CSS
