
let btn = document.querySelector('#btn');
let Nm = document.querySelector('#Nm');
let lbNm = document.querySelector('#lbNm');
let formul = document.querySelector('#formul');
let chk = document.querySelector('#chk');
let cke = document.querySelector('#cke');

Nm.addEventListener('focus', ({target : {value} })=>{
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
chk.addEventListener('click', ()=> {
    cke.checked=true
});

Nm.addEventListener('input', ({target: {value } })=>{
    
    if (value.length < 7 ){
        Nm.style.borderColor = '#2209ff'
        lbNm.style.color = '#2209ff'
    }
    else if (value.length >= 7 ){
        Nm.style.borderColor = '#09AB32'
        lbNm.style.color = '#09AB32'
    }
});
formul.prnm.addEventListener('input', ({target: {value } })=>{
    
    if (value.length < 1 ){
        prnm.style.borderColor = '#2209ff'
        lbprenom.style.color = '#2209ff'
    }
    else if (value.length >= 1 ){
        prnm.style.borderColor = '#09AB32'
        lbprenom.style.color = '#09AB32'
    }
});
formul.mail.addEventListener('input', ({target: {value } })=>{
    
    if (!value.includes('@') ){
        mail.style.borderColor = '#2209ff'
        lbmail.style.color = '#2209ff'
    }
    else if (value.includes('@') ){
        mail.style.borderColor = '#09AB32'
        lbmail.style.color = '#09AB32'
    }
});
formul.psswrd.addEventListener('input', ({target: {value } })=>{
    
    if (value.includes(/[A-Z]/) ){
        psswrd.style.borderColor = '#09AB32'
        lbpsswrd.style.color = '#09AB32'
        console.log('cc')
    }
    else {
        
        psswrd.style.borderColor = '#2209ff'
        lbpsswrd.style.color = '#2209ff'
    }
});