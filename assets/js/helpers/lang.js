const languageToggle = document.querySelector('#language-toggle')

function resetToLang(e) {
    if(e.checked &&  window.location === '/index.html'){
        window.location = '/assets/lang/indexEn.html';
    }else{
        window.location = '/index.html'
    }
}

languageToggle.addEventListener('input',resetToLang)

export default resetToLang;
