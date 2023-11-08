
const regx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const emailValidator = (email) => {
    console.log('the email is valid:', email.length);
    if(!email.length) return 'Email field is empty';

    if(email.length < 5) return 'Email is too short';

    if(!email.match(regx)) return 'Email is invalid';
    return null;
};

export default emailValidator;