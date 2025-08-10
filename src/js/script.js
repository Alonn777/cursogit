const nameUser = document.querySelector('#value-name')
nameUser.addEventListener('input', (e)=>{
    const valueName  = e.target.value
    console.log(valueName)
})