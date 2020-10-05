//Event Listener for submit button
document.getElementById('form-button').addEventListener('click', (event) => {
    submitText();
})

//Executes when you click the submit button
function submitText() {
    //Variable for <input type="text"> 
    const inputBox = document.getElementById('inputText');

    //Create's a paragraph tag with text from <input type="text">
    const newPTag = document.createElement('p');
    const pTagDiv = document.getElementById('pTags');
    newPTag.innerHTML = inputBox.value;
    pTagDiv.appendChild(newPTag);

    
    //Creates a checkbox within newPTag and with event listener crossOut(id)
    const newCheckbox = document.createElement('input');
    newCheckbox.addEventListener('click', (e) => crossOut(e.target.id));
    newCheckbox.classList.add('boxSize');
    newCheckbox.id = pTagDiv.children.length - 1;
    newCheckbox.type = 'checkbox';
    newPTag.appendChild(newCheckbox);

    //Creates a button within newPTag and with event listener deleteTask(id)
    const newButton = document.createElement('button');
    newButton.addEventListener('click', (e) => deleteTask(e.target.id));
    newButton.classList.add('btn', 'btn-secondary');
    newButton.id = pTagDiv.children.length - 1;
    newButton.textContent = 'Delete';
    newPTag.appendChild(newButton);
    
    

    //Sets input text to an empty string after submitting text
    inputBox.value = "";
}

//Delete everything in the same row as delete button when clicked and reassigns id's with reassignId()
function deleteTask(id) {

    const pTag = document.getElementById('pTags').getElementsByTagName('p');
    pTag[id].remove();

    reassignId();
}

//Reassign's the id for checkboxes and delete buttons
function reassignId() {
    const pTagDiv = document.getElementById('pTags').getElementsByTagName('p');
    const checkbox = document.getElementById('pTags').getElementsByTagName('input');
    const button = document.getElementById('pTags').getElementsByTagName('button')
    let index = 0;
    for (let i = 0; i < pTagDiv.length; i++) {
        checkbox[i].id = index;
        button[i].id = index;
        index++;
    }
}

//Crosses out text when you click the checkbox
function crossOut(id) {
    const checkbox = document.getElementById('pTags').getElementsByTagName('input');
    const checkboxID = checkbox.item(id);
    if (checkboxID.checked) {
        checkboxID.parentElement.style.textDecorationLine = "line-through";
    }
    else {
        checkboxID.parentElement.style.textDecorationLine = "none";
    }
}