
const TaskAdd = ({propAlteraTarefas}) => {
    function handleSubmit(event){
        event.preventDefault();
        // trim() Remove espaços em branco no início e no fim
        const tarefa = event.target.elements.tarefaUnica.value.trim().toLowerCase(); 
        console.log(tarefa);
        if(tarefa !== ''){
            propAlteraTarefas((prev) => [...prev, tarefa]);
            event.target.elements.tarefaUnica.value = ''; // Limpa o campo após adicionar a tarefa
        }
    }
  return (
    <>
        {/* Responsável por adicionar tarefa */ }
        <form onSubmit={handleSubmit}>
            <input required type="text" id="tarefaUnica" />
            <button type="submit"> Add Task</button>
        </form>
    </>
  )
}

export default TaskAdd
