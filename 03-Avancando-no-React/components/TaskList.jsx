
const TaskList = ({propTarefas}) => {
  return (
    <>
        {/* Responsável por listar as tarefas */ }
        <ul>
            {propTarefas.map((cadaTarefa) => (
                <li key={cadaTarefa}>{cadaTarefa}</li>
            ))}
        </ul>
        
    </>
  )
}

export default TaskList
