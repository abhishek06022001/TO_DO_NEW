import { saveToLocalStorage,getFromLocalStorage } from "./localStorage";
 let lists = getFromLocalStorage( ) || []; 
 const List = (name)=>{
    let id =  Date.now().toString() ; 
    let todo = [];
    let completed =[];
    return{
        name , 
        id , 
        todo , 
        completed
    }
 }
const create = (name)=>{
    const list = List(name);
    lists.push(list);
    saveToLocalStorage(lists);
}
 //update
 const updateName = (listid, name)=>{
    const list = getListbyId(listid);
    list.name = name; 
    saveToLocalStorage(lists);
}
const deleteList = (listid)=>{
    const index = getIndexbyId(listid);
    lists.splice(index,1);
    saveToLocalStorage(lists);
}
const getIndexbyId = (listId)=> lists.findIndex((element)=>element.id === listId);
const getListbyId = (lisId)=> lists.find((listObject)=> listObject.id === lisId);

// get index
export { create, getListbyId, deleteList, updateName, lists, getIndexbyId }