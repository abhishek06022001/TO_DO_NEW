import {create,getListbyId,deleteList,updateName,lists} from "./List"
import { saveToLocalStorage } from "./localStorage";
// let lists = 

const ToDo = (name ,listId,Description,Priority,Deadline)=>{
    let id = Date.now().toString();
    return {
        id , 
        name ,listId,Description,Priority,Deadline
    }

}
// create 
const createToDo = (name ,listId,Description,Priority,Deadline)=>{
    let targetList =  getListbyId(listId);
    const todo  = ToDo(name ,listId,Description,Priority,Deadline);
    targetList.todo.push(todo);
    saveToLocalStorage(lists);
}
// Update it 
const updateToDo = (id , name, listId, Description, Priority, Deadline) => {
    const todo = getToDo(listId, id);
    todo.name = name ;
    todo.Description = Description; 
    todo.Priority = Priority; 
    todo.Deadline = Deadline;
    saveToLocalStorage(lists);
}
const getIndexbyId =(listId , todoId)=>{
    const targetlist = getListbyId(listId); 
    const index = targetlist.todo.findIndex((element)=> element.id === todoId);
    return index;
}
const getToDo = (listId , todoId)=>{
   const targetlist = getListbyId(listId); 
   const todo = targetlist.todo.find((element)=>element.id === todoId);
   return todo  ; 
}
//delete Todo 
const deleteToDo = (listid , id )=>{
    const list = getListbyId(listid);
    const index = getIndexbyId(listid,id);
    list.todo.splice(index,1);
    saveToLocalStorage(lists);
}
export { createToDo, updateToDo, getIndexbyId, getToDo, deleteToDo };
   
