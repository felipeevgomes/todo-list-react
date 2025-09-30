import { FormEvent, useEffect, useState } from "react";
import styles from "./Taskes.module.scss";

interface Task {
  title: string;
  done: boolean;
  id: number;
}

export const Taskes: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([] as Task[]);

  //função disparada quando o usuario esta querendo adicionar uma nova tarefa
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();
    if (taskTitle.length < 3) {
      alert("Não é possivel adicionar uma tarefa com menos de 3 letras..");
      return;
    }

    //adiciona tarefa
    const newTasks = [
      ...tasks, //pega todas as tarefas que já existiam e coloca nesse novo valor do estado de tarefas
      { id: new Date().getTime(), title: taskTitle, done: false },
    ];
    setTasks(newTasks);
    
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    setTaskTitle("");
  }

  useEffect(()=>{
    const tasksOnLocalStorage = localStorage.getItem('tasks')
    if(tasksOnLocalStorage){
      setTasks(JSON.parse(tasksOnLocalStorage))
    }
  }, [])

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input
            value={taskTitle}
            onChange={(event) => {
              setTaskTitle(event.target.value);
            }}
            type="task-title"
            placeholder="Título da tarefa"
          />
        </div>
        <button type="submit">Adicionar Tarefa</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" id={`task-${task.id}`} />
              <label htmlFor="task">{task.title}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
