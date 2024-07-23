import styles from './Challenge5CSS.module.css';

const Challenge5CSS = () => {
    const listCars = [
        {id: 451, name:"C40", brand:"Volvo", year: 2010, km: 10205074},
        {id: 456, name:"Gol", brand:"Volkswagen", year: 2024, km: 0},
        {id: 458, name:"C200", brand:"Mercedes Benz", year: 2020, km: 155074},
        {id: 500, name:"T-Cross", brand:"Volkswagen", year: 2024, km: 0},
    ];
  return (
    <>
      <ul>
        {
            listCars.map((car) => (
            <li className={styles.myCar} key={car.id}>
                <p className={styles.carDetails}>{car.name} </p>
                <p className={styles.carDetails}>{car.brand}</p>  
                <p className={styles.carDetails}>KM: {car.km}</p>  
                <p className={styles.carDetails}>Ano: {car.year}</p>  
            </li>
            ))
        }
    </ul>
    </>
  )
}

export default Challenge5CSS
