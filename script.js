var checkbox = document.getElementById('checkbox')
var label = document.getElementById('label')


checkbox.addEventListener('click', () => {

    var password = document.getElementById('senha')

    if (checkbox.checked) {

        password.setAttribute('type', 'text')
        label.textContent = 'Hide Password!';

    } else {

        password.setAttribute('type', 'password')
        label.textContent = 'Show Password?';
    }


})