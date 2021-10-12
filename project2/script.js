let allContent=document.querySelector('.container')
let input_items=document.querySelector('#input_todo')
let addButton=document.querySelector('.add_todo_btn')

console.log(allContent)
console.log(input_items)
console.log(addButton);


// let items=[]

function deleteitem(e){
    e.target.parentElement.remove()
}



function DataFunc(){
    let itemsData=input_items.value;
    // items.push(itemsData)
    // console.log(items);
    input_items.value=""

    // make th elements and then append
    const LiItem=document.createElement("li") //<li></li>
    LiItem.className="li" //<li class="li"></li>
    const liText=document.createTextNode(itemsData)
    LiItem.appendChild(liText)

    const delete_button=document.createElement("button");
    delete_button.className="delete_btn";
    const btnText=document.createTextNode("Delete")
     delete_button.append(btnText)
     console.log(delete_button);
    LiItem.appendChild(delete_button)
    console.log(LiItem);

// make the edit Button
const editButton=document.createElement("button")
editButton.className="edit_btn"
const editText=document.createTextNode("Edit")
   editButton.appendChild(editText)
   LiItem.appendChild(editButton)
    // UlItem.appendChild(LiItem)

    editButton.addEventListener('click', editor);

     const UlItem=document.createElement("ul")
     UlItem.id="ul_data"
     UlItem.appendChild(LiItem)

    
//    make the Delete Button
  delete_button.addEventListener('click',deleteitem) 
  // edit the text
  //  editButton.addEventListener('click',editTheValue)
  // let edit = document.createElement('button');
  // edit.className = 'edit_todo fas fa-pen-square';
  // edit.addEventListener('click', editor);

  //   UlItem.appendChild(edit)

    allContent.appendChild(UlItem)

}
function editor(e) {
  let ele = e.target;
  let parent = this.parentNode.parentNode;
  let txt = parent.childNodes[0].innerText;
  input_items.value = txt;

  // deleteTodo(ele)
  // deleteitem(ele)
  
}


addButton.addEventListener('click', DataFunc)