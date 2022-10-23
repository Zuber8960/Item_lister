let form=document.getElementById('addForm');
let itemList=document.getElementById('items');

//form submit event:
form.addEventListener('submit',addItem);

//Q-1) On clicking the delete button we should be able to remove the newly created li tag:
//delete item event:
itemList.addEventListener('click',removeItem);



// add item
function addItem(e){
    e.preventDefault();
    
    // get input value
    let newItem=document.getElementById('item').value;
    // console.log(newItem);

    //create new li element
    let li=document.createElement('li');

    //add class
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);

    //add delete button
    let del=document.createElement('button');
    //add class
    del.className="btn btn-danger btn-sm float-right delete";
    del.appendChild(document.createTextNode('X'));
    //append button in list
    li.appendChild(del);
    //append list to itemList
    itemList.appendChild(li);
    
    createBtn(li);
}

//remove item from list:
function removeItem(e){
    // console.log(1);
    if(e.target.classList.contains('delete')){
        // console.log(1);
        if(confirm('Are you sure?')){
            li=e.target.parentElement;
            itemList.removeChild(li);
        }

    }
    console.log("hi");
}

//Q-2) Now add an edit button next to the delete icon.
function createBtn(li){
    let editBtn=document.createElement('button');
    editBtn.className='btn btn-danger btn-sm float-right';
    editBtn.style.backgroundColor='green';
    editBtn.style.color='white';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    itemList.appendChild(li);
    console.log(1);
}

console.log(document.getElementsByTagName('li'));
let liTag=document.getElementsByTagName('li');

for(let i=0; i<liTag.length; i++){
    createBtn(liTag[0]);
}

//=============================================================





