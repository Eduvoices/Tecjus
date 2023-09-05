import { useState } from "react"
import { Dados, Print } from "./styles"


function Recibos() {
    const [nome, setNome] = useState('')
    const [emitente, setEmitente] = useState('')
    const [valor, setValor] = useState('')


    function dataAtual() {
        let data = new Date()
        let day = data.getDate().toString().padStart(2, '0')
        let month = String(data.getMonth() + 1).padStart(2, '0')
        return `${day}/${month}/${data.getFullYear()}`
    }

    const cash = parseFloat(valor).toLocaleString('pt-br', {minimumFractionDigits: 2})


    function onClick() {
        window.print()
    }


    return (
        <>
            <Dados className="dados">
            <h1>Recibos</h1>
                Nome emitente: <br />
                <input 
                type="text" 
                name="" id="emitente" 
                onChange={(e)=> setEmitente(e.target.value)}
                /> 
                <br /> <br />

                Recebemos de: <br />
                <input type="text" name="" id="nome" onChange={(e)=> setNome(e.target.value)}/> <br /> <br />

                Valor: R$ <br />
                <input type="number" name="" id="valor" step='0.01' onChange={(e)=>setValor(e.target.value)}/> <br /> <br />

                <button onClick={onClick}>Gerar recibo</button>
            </Dados>

            <Print>
                <div>
                <h1>Recibo - <span id="recibo_emitente">{emitente}</span></h1>
                <p>Recebemos de <span id="recibo_nome">{nome}</span></p>
                <p>Valor<h4 id="recibo_valor">R$ {cash}</h4></p>
                <p>Data <span id="recibo_data">{dataAtual()}</span></p>
                <div className="assinatura">Assinatura</div>
                </div>
            </Print>
        </>
    )
}

export default Recibos