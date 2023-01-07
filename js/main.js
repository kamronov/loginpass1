var submit = document.querySelector('.submit')
var modal = document.querySelector('.modal')
var title = document.querySelector('.title')
var hato = document.querySelector('.hato')
var x = document.querySelector('.x')
var shadow = document.querySelector('.shadow')
var ElUser = document.querySelector('#user')
var ElPassword = document.querySelector('#password')
var body = document.querySelector('body')
var iconPass = document.querySelector('.icon-pass')
var userName = '123';
var parol = 123;

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    if(ElUser.value == userName && ElPassword.value == parol){
        modal.classList.add('showmodal')
        ElUser.classList.add('togri')
        ElUser.style.backgroundColor = 'rgb(81, 231, 81)'
        ElPassword.style.backgroundColor = 'rgb(81, 231, 81)'
        ElPassword.classList.add('togri')
        title.textContent = 'Muaffaqiyatli!'
        title.style.color = 'green'
        x.style.backgroundColor = 'green'
        modal.style.boxShadow = '0px 0px 8px green'
        shadow.style.display = 'block'
        body.style.overflow = 'hidden'
    }else if (ElUser.value == '' && ElPassword.value == ''){
        modal.classList.add('showmodal')
        title.textContent = "Bo'sh ma'lumot"
        ElUser.style.backgroundColor = 'inherit'
        ElPassword.style.backgroundColor = 'inherit'
        x.style.backgroundColor = 'yellow'
        title.style.color = 'yellow'
        shadow.style.display = 'block'
        modal.style.boxShadow = '0px 0px 8px yellow'
        body.style.overflow = 'hidden'
    }   
    else {
        modal.classList.add('showmodal')
        title.textContent = 'Login/parol hato!'
        ElUser.classList.add('hatoku')
        ElPassword.classList.add('hatoku')
        ElUser.style.backgroundColor = 'red'
        ElPassword.style.backgroundColor = 'red'
        x.style.backgroundColor = 'red'
        title.style.color = 'red'
        shadow.style.display = 'block'
        modal.style.boxShadow = '0px 0px 8px red'
        body.style.overflow = 'hidden'
    }
})

x.addEventListener('click', ()=>{
    modal.classList.remove('showmodal')
    shadow.style.display = 'none'
    body.style.overflow = 'auto'

})
shadow.addEventListener('click', ()=>{
    modal.classList.remove('showmodal')
    body.style.overflow = 'auto'
    shadow.style.display = 'none'
})
iconPass.addEventListener('click', ()=>{
   if(ElPassword.getAttribute('type')==='password'){
    ElPassword.setAttribute('type', 'text')
    iconPass.style.color = 'red'
   }else{
    iconPass.style.color = 'black'
    ElPassword.setAttribute('type', 'password')
   }
})