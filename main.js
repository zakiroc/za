const btn = document.querySelector('.addbtn')
const input = document.querySelector('input')
const text = document.querySelector('p')


btn.addEventListener('click' , (e)=>{
    e.preventDefault()
    inputVal = input.value
    localStorage.setItem('text' , inputVal)
    inputVal=""
    text.innerHTML = localStorage.getItem('text')

})

text.innerHTML = localStorage.getItem("text")
// localStorage.clear()