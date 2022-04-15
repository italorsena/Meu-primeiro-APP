import React, { useState } from 'react';
import addIcon from "./icons/plus-solid.svg"
import removeIcon from "./icons/remove.svg"

function App() {
    let lista:string[] = ["Óculos", "Limpa Lentes"]
    const [carrinho, setCarrinho] = useState <string[]>([])
    const adicionaProduto = (produto:string) => {
        setCarrinho([...carrinho,produto])
        console.log(carrinho)
    }
    const removeProduto = (produto:string) => {
        let indice = carrinho.findIndex((e) => { return e === produto})
    }
    return (
        <div>
            <h1>Lista de Produtos Disponiveis</h1>
            <ul>
                {lista.map((produto) => { return (
                    <div>
                        <li>{produto}</li> 
                        <button onClick={() => adicionaProduto(produto)}><img src={addIcon} alt="adicionar" /></button>
                    </div>
                ) })}
            </ul>
            
            <h1>Carrinho</h1>
            <ul>
                {carrinho.map((produto) => {return ( 
                    <div>
                        <li>{produto}</li>
                        <button onClick={() => removeProduto(produto)}><img src={removeIcon} alt="adicionar" /></button>

                    </div>
                ) })}
                
            </ul>
        </div>
    );
}

export default App;
