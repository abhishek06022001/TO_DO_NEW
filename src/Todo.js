import {create,getListbyId,deleteList,updateName,lists} from "./List"
import { saveToLocalStorage } from "./localStorage";
// let lists = 

const ToDo = (name ,listId,Descriptiob,Priority,Deadline)=>{
    let id = Date.now().toString();
    return {
        id , 
        name ,listId,Descriptiob,Priority,Deadline
    }

}
// create 
const createToDo = (name ,listId,Descriptiob,Priority,Deadline)=>{
    let targetList =  getListbyId(listId);
    const todo  = ToDo(name ,listId,Descriptiob,Priority,Deadline);
    targetList.todo.push(todo);
    saveToLocalStorage(lists);
}
export{createToDo}
   
