import axios from 'axios';
import React, { useState } from 'react'

const Exercicio5 = () => {
    const urlBase = "http://localhost:3000"

    const [nome, setNome] = useState("");
    const [contato, setContado] = useState("");
    const [mensagem, setMensagem] = useState("");

    const addContato = async (objetoParaEnviar) => {
        const response = await axios.post(`${urlBase}/contatos`, objetoParaEnviar)
        console.log("contato adicionado com sucesso")
        alert("contato adicionado com sucesso")

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const dadosDoForm = {
            nome: nome,
            contato: contato,
            mensagem: mensagem
        }

        addContato(dadosDoForm)

        const jsonParaEnviarParaBack = JSON.stringify(dadosDoForm);

        console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${jsonParaEnviarParaBack}`)

    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="nome">Nome: </label>
            <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="digite seu nome"/>
        </div>
        <div>
            <label htmlFor="contato">Contato: </label>
            <input type="text" id="contato" value={contato} onChange={(e) => setContado(e.target.value)} placeholder="digite seu contato"/>
        </div>
        <div>
            <label htmlFor="mensagem">Mensagem: </label>
            <textarea id="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
        </div>
        <button type="submit">Enviar</button>
    </form>

    </>
  )
}

export default Exercicio5