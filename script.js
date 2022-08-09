function savetoLocalStorage(event){
    event.preventDefault();
    const expense = event.target.expenseamount.value;
    const description = event.target.Chdescription.value;
    const category = event.target.Chcategory.value;

    const obj = {
        expense,
        description,
        category
    }
    localStorage.setItem(obj.description,JSON.stringify(obj));
    onScreen(obj);
}

function onScreen(detail){
    const parentNode = document.getElementById('users');
    const childHTML = `<li id=${detail.description} > ${detail.expense} - ${detail.description} - ${detail.category}  <button id="edit" onclick=editUser('${detail.description}','${detail.expense}')> Edit </button> <button onclick=deleteUser('${detail.description}')> Delete </button>  </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function deleteUser(Chdescription) {
    localStorage.removeItem(Chdescription);
    removeFromScreen(Chdescription);
}

function removeFromScreen(Chdescription){
    const parentNode = document.getElementById('users');
    const childNodeToDelete = document.getElementById(Chdescription);
    parentNode.removeChild(childNodeToDelete);
}

function editUser(Chdescription,expense){
    document.getElementById('description').value = Chdescription
    document.getElementById('expense').value = expense
    deleteUser(Chdescription)
}


Object.keys(localStorage).forEach((key) => {
    output = localStorage.getItem(key);
    detail = JSON.parse(output)
    onScreen(detail)
})

