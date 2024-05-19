import * as Lists from './List';
import * as Todo from './Todo';
import * as localStorage from './localStorage';
import './styles.css';
function uiControl(){
    renderHomePage();
    const createProject = document.querySelector('#create_project');
    createProject.addEventListener('click', ()=>{
        openModal(undefined);
    })
}
function renderHomePage() {
    const todoelement = document.querySelector('.todo_info');
    todoelement.textContent = "";

    const sidebar = document.querySelector('.sidebar_info');
    sidebar.textContent= "";
    const lists = localStorage.getFromLocalStorage();

    for (const element in lists) {
        const list = lists[element];
        const button = document.createElement('span');
        const editbutton = document.createElement('button');
        editbutton.textContent="edit";
        const deletebutton = document.createElement('button');
        deletebutton.textContent="delete";
        const sidebarChild = document.createElement('div');

        const currListId = list.id;
        // alert(currListId);
        button.id = currListId;
        button.textContent = list.name;
        button.classList.add('list_button');
        sidebarChild.appendChild(button);
        sidebarChild.appendChild(editbutton);
        sidebarChild.appendChild(deletebutton);
        sidebar.appendChild(sidebarChild);
        editbutton.addEventListener('click',()=>{
            
            openModal(currListId);
            // alert(currListId);
        });
        deletebutton.addEventListener('click', () => {

        })
    }
}

function openModal(index) {
    const modal = document.createElement('div');
    const todoelement = document.querySelector('.todo_info');
    modal.classList.add('modal');
    const nameinput = document.createElement('input');
    nameinput.classList.add('create_list_input');
     const saveListButton  = document.createElement('button');
     saveListButton.classList.add('save_button');
     saveListButton.textContent= "SAVE";
     modal.appendChild(nameinput) ;
     modal.appendChild(saveListButton);
     todoelement.appendChild(modal);
    modal.style.display = 'block';
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    const createListButton = document.querySelector('.save_button');
        if(!index){
            createListButton.addEventListener('click', () => {
                const name = document.querySelector('.create_list_input').value;
                Lists.create(name);
                modal.style.display = 'none';
                renderHomePage();

            })
        }else{
    createListButton.addEventListener('click',()=>{
        const name = document.querySelector('.create_list_input').value;
        alert(index);
        Lists.updateName(index,name);
        modal.style.display = 'none';
        renderHomePage();
 
    });
        }

}
export{uiControl}