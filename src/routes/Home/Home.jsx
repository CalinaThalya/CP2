import { Link } from "react-router-dom"
import { ListaProdutos } from "../../components/ListaProdutos"

export default function Home() {

  const aparelhoPromocao = ListaProdutos.slice(0, 2);

  return (
    <main>
      <h1>APROVEITE HOJE NOSSAS PROMOÇÕES!</h1>
      {aparelhoPromocao.map(prod => (
        <div key={prod.id} class="style-product">
          <Link to={`../produtos/editar/${prod.id}`} >
              <p>{prod.nome}</p>
              <p>Por apenas R$ {prod.preco}</p>
              <p><img src={`${prod.img}`} alt={`${prod.nome}`} /></p>
          </Link>
        </div>
      ))}
    </main>
  );
}

