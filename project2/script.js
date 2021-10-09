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
    input_items.value=""
    // console.log(items);
     

    // make th elements and then append
    const LiItem=document.createElement("li") //<li></li>
    LiItem.className="li"
    const liText=document.createTextNode(itemsData)
    LiItem.appendChild(liText)
    const delete_button=document.createElement("button");
    delete_button.className="delete_btn";
    const btnText=document.createTextNode("Delete")
     delete_button.append(btnText)
     console.log(delete_button);
    LiItem.appendChild(delete_button)
    console.log(LiItem);

     const UlItem=document.createElement("ul")
     UlItem.id="ul_data"
     UlItem.appendChild(LiItem)

  allContent.appendChild(UlItem)
   


//    make the Delete Button
  delete_button.addEventListener('click',deleteitem) 
  
}
addButton.addEventListener('click', DataFunc)