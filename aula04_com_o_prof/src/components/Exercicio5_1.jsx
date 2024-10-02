import React, { useState } from 'react';

const Exercicio5_1 = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validacaoSenha = (senha, confirmeSenha) => {
    if (senha !== confirmeSenha){
        alert("As senhas não coincidem. Por favor, corrija.");
        return false
    } 
    return true
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!validacaoSenha(password, confirmPassword)){
        return;
    }

    
    const dadosDoForm = {
        userName: userName,
        email: email,
        password: password,
        endereco: endereco,
        telefone: telefone
    };

    const jsonParaEnviarParaBack = JSON.stringify(dadosDoForm);

    console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${jsonParaEnviarParaBack}`);

    setFormSubmitted(true);
   
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">Nome: </label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmar Senha: </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirme sua senha"
            required
          />
        </div>
        <div>
          <label htmlFor="endereco">Endereço: </label>
          <input
            type="text"
            id="endereco"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            placeholder="Digite seu endereço"
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone: </label>
          <input
            type="text"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Digite seu telefone"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {formSubmitted && <p>Formulário enviado com sucesso!</p>}
    </>
  );
};

export default Exercicio5_1;
