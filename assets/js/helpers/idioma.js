const lenguaje = document.querySelector('#language-toggle')
const currentLang = window.location.href.includes('/indexen.html')
lenguaje.checked= currentLang
function changelenguaje(){
    if(lenguaje.checked){
        window.location.href='/indexen.html'
    }
    else{
        window.location.href='/index.html'
    }
}

lenguaje.addEventListener('change', changelenguaje)
export default changelenguaje;
