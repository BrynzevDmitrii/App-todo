import styles from './TodoList.module.css'
const TodoList = ({item , toggleTask , removeTask}) => {
    return (  
    <div key={item.id} className = {styles['wrapper']}>
        
        <button
        onClick={()=>{toggleTask(item.id)}}
            className = {styles['performed']}>
            Выполнена</button>
        <div  className = {item.isCheked?styles['todo-line'] : styles['todo']} >{item.task}</div>
        <button 
        onClick={()=>{removeTask(item.id)}}
        className = {styles['closed']}
        >&times;</button>
    </div>
    );
}
 
export default TodoList;