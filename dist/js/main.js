const toSignInBtn = document.querySelector('.btn-to-login');
const toSignUpBtn = document.querySelector('.btn-to-signup');
const signInDiv = document.querySelector('.signin-div');
const signUpDiv = document.querySelector('.signup-div');

const signUpForm = document.querySelector('.singup-form');
const signInForm = document.querySelector('.singin-form');

const leftInfo = document.querySelector('.left-info');
const rightInfo = document.querySelector('.right-info');

let signUpShow = true;

toSignInBtn.addEventListener('click',toggle);
toSignUpBtn.addEventListener('click',toggle);


function toggle(){
    if(signUpShow){
        signUpShow = false;
        //show sign in elements
        signInDiv.classList.add('show');
        rightInfo.classList.add('show');
        signInForm.classList.add('show');
        //dont show signup elements
        signUpDiv.classList.remove('show');
        leftInfo.classList.remove('show');
        signUpForm.classList.remove('show');
    }else{
        signUpShow = true;
        //show sign in elements
        signInDiv.classList.remove('show');
        rightInfo.classList.remove('show');
        signInForm.classList.remove('show');
        //dont show signup elements
        signUpDiv.classList.add('show');
        leftInfo.classList.add('show');
        signUpForm.classList.add('show');
    }
}