const gen = ()=>{
    const num = Math.floor(Math.random() * 16777215);
    const randomCode = "#"+num.toString(16);
    document.getElementById('code').innerText=randomCode;
    document.body.style.backgroundColor=randomCode;
}
const btn = document.querySelector('body');
btn.addEventListener('click',gen);