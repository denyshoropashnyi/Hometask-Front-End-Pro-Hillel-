function onInputFocus(event){

    toggleBackground(event.target);

    console.log(event);
    // alert('Hell from function');
    // this.removeEventListener('click', sayHello);
}

function toggleBackground(el){
    el.style.background =
        el.style.background === 'yellow' ?
            'red':'yellow';
}

const input = document.getElementById('input');
input.addEventListener('mouseup', onInputFocus)
input.addEventListener('blur', onInputFocus);

document.getElementById('title')
    .addEventListener('focus', onInputFocus);
