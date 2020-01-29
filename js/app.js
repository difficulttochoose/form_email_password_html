console.log('App was loaded...');

const exampleInputEmail1 = document.getElementById('exampleInputEmail1');
const exampleInputPassword1 = document.getElementById('exampleInputPassword1');
const isPasswordValid = password => password.length < 6;
const isEmailValid = email => !email.split('').filter(el => el === '@').length;

exampleInputEmail1.addEventListener('input', e => {
    if (isEmailValid(e.target.value)) {
        e.target.classList.add('is-invalid')
        e.target.classList.remove('is-valid')
    } else {
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    }
})

exampleInputPassword1.addEventListener('input', e => {
    if (isPasswordValid(e.target.value)) {
        e.target.classList.add('is-invalid')
        e.target.classList.remove('is-valid')
    } else {
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    }
})

// exampleInputPassword1.addEventListener('input', e => {
//     if (e.target.value == ' ') {
//         e.target.value = '';
//     }
// })

const users = [
    { email: 'olevchenko@gmail.com', password: '11111111' },
    { email: 'test@gmail.com', password: '22222222' },
    { email: 'somemail@gmail.com', password: '33333333' },
    { email: 'anothermail@gmail.com', password: '44444444' },
    { email: 'onemoremail@gmail.com', password: '55555555' },
    { email: 'andonemoremailagain@gmail.com', password: '66666666' },
];

const eye = document.getElementById('eye');
// const eye2=eye.before(document.createElement("span").innerHTML='\f070');
eye.addEventListener('click', () => {
    exampleInputPassword1.setAttribute('type', exampleInputPassword1.getAttribute('type') == "password" ? 'text' : 'password');
    // if (exampleInputPassword1.getAttribute('type') == "text") {
    //     eye.style.content = '\f070';
    // }

})
//f070 closed eye
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const r = users.filter(el => el.email == e.target[0].value);
    alert(e.target[0].value == '' ? 'Enter email!' : (e.target[1].value == '' ? 'Enter password!' : (!r.length ? 'Wrong email!' : ((e.target[1].value == r[0].password ? 'This is success!' : 'Wrong password!')))));
    console.log('password', e.target[1].value.split('').filter(el => el != ' ').join(''));
})
