
let btn = document.querySelector('#btn');
let Nm = document.querySelector('#Nm');
let lbNm = document.querySelector('#lbNm');
let formul = document.querySelector('#formul');

Nm.addEventListener('focus', ()=>{
    lbNm.style.visibility = 'visible'
    Nm.style.outline = 'none'
    Nm.style.borderWidth = '0 0 2px 0'
    Nm.style.borderColor = '#2209ff'
    lbNm.style.color = '#2209ff'
    Nm.placeholder = ""
});
btn.addEventListener('click', ()=>{
    btn.style.backgroundColor = '#2209ff';
});
formul.prnm.addEventListener('focus', ()=>{
    prnm.style.outline = 'none'
    lbprenom.style.visibility = 'visible'
    prnm.style.borderWidth = '0 0 2px 0'
    prnm.style.borderColor = '#2209ff'
    lbprenom.style.color = '#2209ff'
    prnm.placeholder = ""
});
formul.mail.addEventListener('focus', ()=>{
    mail.style.outline = 'none'
    lbmail.style.visibility = 'visible'
    mail.style.borderWidth = '0 0 2px 0'
    mail.style.borderColor = 'red'
    lbmail.style.color = 'red'
    mail.placeholder = ""
});
formul.psswrd.addEventListener('focus', ()=>{
    psswrd.style.outline = 'none'
    lbpsswrd.style.visibility = 'visible'
    psswrd.style.borderWidth = '0 0 2px 0'
    psswrd.style.borderColor = 'red'
    lbpsswrd.style.color = 'red'
    psswrd.placeholder = ""
});
formul.Cnfrme.addEventListener('focus', ()=>{
    Cnfrme.style.outline = 'none'
    lbconfrm.style.visibility = 'visible'
    Cnfrme.style.borderWidth = '0 0 2px 0'
    Cnfrme.style.borderColor = 'red'
    lbconfrm.style.color = 'red'
    Cnfrme.placeholder = ""
});

formul.chk.addEventListener('click', ()=> {
  alerte('cc')  
});