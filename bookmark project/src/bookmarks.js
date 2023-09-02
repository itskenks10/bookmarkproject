
// alert('welcome')
var btnLinks = document.getElementsByClassName('btn-links');
var containers = document.getElementsByClassName('container');
let icons = document.getElementById('icon')
let answer = document.getElementById('answer')
let answer2 = document.querySelector('.answers')
let testrun = document.querySelector('.testrun')
function openTab(tabname){
console.log(tabname)
    for(btnLink of btnLinks)
    {btnLink.classList.remove('active')}
    for(container of containers)
    {container.classList.remove('active')}
    event.currentTarget.classList.add('active')
    document.getElementById(tabname).classList.add('active')
}

// btnLinks.addEventListener('click',()=>{
//     if(btnLinks.classList.click()){
//         btnLinks.style.border-bottom='2px'
//     }
//     else{
//         btnLinks.style.border-bottom='0px'
//     }
// })

icons.addEventListener('click',()=>{
    icons.classList.toggle('bi-chevron-up')
    if(icons.classList.contains ('bi-chevron-up')){
        answer.style.display='block'
        // answer.style.transition='1s ease-in'
        // answer.style.transitionDelay ='0.5s'
        icons.style.color='hsl(0, 94%, 66%)'
    }
    else{
        answer.style.display='none'
        icons.style.color='hsl(231, 69%, 60%)'
    }
})

testrun.addEventListener('click',()=>{
    testrun.classList.toggle('bi-chevron-up')
    if(testrun.classList.contains ('bi-chevron-up')){
        answer2.style.display='block'
        testrun.style.color='hsl(0, 94%, 66%)'
        console.log('hello')
    }
    else{
        answer2.style.display='none'
        testrun.style.color='hsl(231, 69%, 60%)'
    }
})