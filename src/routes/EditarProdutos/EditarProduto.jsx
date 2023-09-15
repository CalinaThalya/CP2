import {useParams, useNavigate } from "react-router-dom"
import { ListaProdutos } from "../../components/listaProduto"

export default function EditarProduto() {

  const lista = ListaProdutos
  const navegacao = useNavigate()
  const {id} = useParams()

  const proc = lista.filter(prod => prod.id == id)
  const produto = proc[0]
  
  const salvar = () => {
    alert(`Produto: ${produto.nome} editado com sucesso!`)
    return navegacao('/produtos')
  }
  
  return (
    <main>
      <div class="style-product">
        <h1>PRODUTOS</h1>
        <h2>{produto.nome}</h2>
        <h2>R${produto.preco}</h2>
        <p><img src={`${produto.img}`} alt={`${produto.nome}`} /></p>
      </div>   
    </main>
  )
}
