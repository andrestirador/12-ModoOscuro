const toggleTheme= document.getElementById('toggle-theme');
const toggeIcon= document.getElementById('toggle-icon');
const toggleText= document.getElementById('toggle-text');

toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')

    if(toggeIcon.src.includes('moon.svg')){
        toggeIcon.src='./img/icons/sun.svg';
        toggleText.textContent='Light Mode';
    }else{
        toggeIcon.src='./img/icons/moon.svg';
        toggleText.textContent='Dark Mode';
    }
})