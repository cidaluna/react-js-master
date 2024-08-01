
const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        {/* O uso de destruturing facilita a escrita do código e mantemos o mesmo nome da propriedade */}
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>Este carro é ZERO KM!</p>}
    </div>
  )
}

export default CarDetails
