import { Outlet, useParams } from "react-router-dom";

const Info = () => {
  const { idcustom } = useParams();

  return (
    <div>
      <h2>Info - Mais informações sobre o produto {idcustom} </h2>
      <Outlet /> {/* Onde a rota filha será renderizada */}
    </div>
  )
}

export default Info
