import React, { useState } from 'react'

const ToDoList = () => {

    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState("");
    const [erro, setErro] = useState("");
    
    const adicionarTarefa = () => {
        if(novaTarefa.trim() != ""){
            setTarefas([...tarefas, novaTarefa]);
            setNovaTarefa("");
            setErro(""); 
        } else {
            setErro("Por favor, digite uma tarefa válida.");
        }
    };



  return (
    <div className='todo-list'>
        <h2>Lista de Tarefas</h2>
        <input
            type="text"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            placeholder='Digite uma nova tarefa'/>
            <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>

    </div>
  )
}

export default ToDoList