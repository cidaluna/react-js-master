
const TaskCount = ({propTarefas}) => {
  return (
    <>
    {/* Responsável por contar as tarefas */ }
      <h2>Quantidade de tarefas no dia: {propTarefas.length}</h2>
    </>
  )
}

export default TaskCount
