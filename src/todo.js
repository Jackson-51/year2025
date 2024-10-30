import { useState } from 'react';
import './todo.css';

const Todo = () => {
    const [value, setValue] = useState('');
    const [task, setTask] = useState([]);
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('');
    const [editing, setEditing] = useState([]);
    
    const add = () => {
       if(value.length === 0){
        setMessage("There's nothing to add");
        setColor('#bebb00');
       }
       else if(editing[1]){
        let newEdit = [...task];
        newEdit[editing[0]] = value;
        setTask(newEdit);

        setValue('');
        setMessage('');

        setEditing([null, false]);
       }
       else{
        setTask((prev) => [...prev, value]);
        setValue('');
        setMessage('');
       }
    }

    // useEffect(() => {
    //     console.log(editing)
    // }, [editing]);

    const filtering = (id) => {
        let newTasks = task.filter((item) => task.indexOf(item) !== id);
        setTask(newTasks);
    }

    const edit = (text, i) => {
        setValue(text);
        setEditing([task.length - 1 - i, true]);
    }

    return (
        <div className="todo_list">
            <div className="list_container">
                <div className="header">
                    <h1>ToDo List</h1>
                    <i className="fa-solid fa-list"></i>
                </div>
                <div className="interaction">
                    <input type="text" placeholder='Add new task' value={value} onChange={(e) => setValue(e.target.value)} />
                    <button onClick={add}><i className="fa-solid fa-plus"></i></button>
                </div>
                <div className="message" style={{color:`${color}`}}>{message}</div>
                <div className="task">
                    {task.slice().reverse().map((data, index) => (
                        <div className="item" key={index}>
                            <p>{data}</p>
                            <div className="icons">
                                <i className='fa-solid fa-trash-can' onClick={() => filtering(index)}></i>
                                <i className="fa-solid fa-pen" onClick={() => edit(data, index)}></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Todo;