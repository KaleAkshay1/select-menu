let mainTxt = document.getElementById('mainTxt');
// let text=document.getElementsByClassName('txt-option')
let select = document.getElementsByClassName('select')[0]
let option = document.getElementsByClassName('option')
let hide=document.getElementById('hide')
let arrow = document.getElementById('arrow')

// console.log(option)
// console.log(select)

select.addEventListener('click',()=>{
    hide.classList.toggle('hide')
    arrow.classList.toggle('rotate')
})

Array.from(option).forEach((element) => {
    element.onclick = () => {
        // console.log(element.lastElementChild.innerText)
        const text = element.lastElementChild.innerText
        mainTxt.innerText = text
        hide.classList.add('hide')
        arrow.classList.remove('rotate')
        
    }
});
