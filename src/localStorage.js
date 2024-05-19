import { get } from "lodash";

const localStorageKey = "lists"; 
function saveToLocalStorage(lists ,listid){
    localStorage.setItem(localStorageKey,JSON.stringify(lists));
}
function getFromLocalStorage(){
    const data = JSON.parse(localStorage.getItem(localStorageKey));
    return data ;// return object which contains object 
}
export {saveToLocalStorage , getFromLocalStorage};