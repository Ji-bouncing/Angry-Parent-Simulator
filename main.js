document.querySelector('#check').addEventListener('click', getOutInputs)

function getOutInputs(){
  const fName = document.querySelector('#fName').value
  const lName = document.querySelector('#lName').value
 const mName = document.querySelector('#mName').value
const nName = document.querySelector('#nName').value

document.querySelector('#putResult').innerText = `${fName} ${lName} ${mName} ${nName}`

}



