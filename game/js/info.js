let $ = document
const inputUserName = $.getElementById('inputUserName');

let inpValue = inputUserName.innerHTML

localStorage.setItem('newLord', inpValue)