let form=document.getElementById('addForm');
let itemList=document.getElementById('items');

//form submit event:
form.addEventListener('submit',addItem);

//delete item event:
itemList.addEventListener('click',removeItem);



// add item
function addItem(e){
    e.preventDefault();
    
    // get input value
    let newItem=document.getElementById('item').value;
    // console.log(newItem);

    let newItem2=document.getElementById('discription').value;

    //create new li element
    let li=document.createElement('li');

    //add class
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(newItem2));
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
}

//add an edit button next to the delete icon.
function createBtn(li){
    let editBtn=document.createElement('button');
    editBtn.className='btn btn-danger btn-sm float-right';
    editBtn.style.backgroundColor='green';
    editBtn.style.color='white';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    itemList.appendChild(li);
    // console.log(1);
}

// console.log(document.getElementsByTagName('li'));
let liTag=document.getElementsByTagName('li');

for(let i=0; i<liTag.length; i++){
    createBtn(liTag[0]);
}

//=============================================================
// task-9
//Q-1) When we type on the input box show me those items from the list which match my search string.
let filter=document.getElementById('filter');

//filter item event;
filter.addEventListener("keyup",filterItems);

//filter items;

//Q-4)check both the name of the item and the description. If search string is found in any place show the item.
function filterItems(e){
    //convert everything to lowercase for easy selection
    let text = e.target.value.toLowerCase();
    // console.log(text);
    const items = itemList.querySelectorAll('.list-group-item');
    // console.log(items);
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        // console.log(itemName);
        let itemName2 = item.childNodes[2].textContent;
        // console.log(itemDes);
        if((itemName.toLowerCase().indexOf(text) != -1) || (itemName2.toLowerCase().indexOf(text) != -1)){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}




//Q-2) Now go ahead and take description of the item too in the input box where you are creating the item.
//create a input
let input=document.createElement('input');
input.className= 'form-control mr-2';
input.type='text';
input.id= 'discription';
console.log(input);

//set input in form before submit.
let bag=document.getElementById('addForm');
let last=document.getElementById('item_2');
bag.insertBefore(input,last);

//============================================================

