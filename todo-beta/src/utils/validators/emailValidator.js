// Let's define th basic regex patter to test the input values for 'email' field.
const regex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;

const emailValidator = (email) => {
    if(!email.length) return 'Email is empty, fill the input field';
    if(!regex.test(email)) return 'Email invalid, fix or choose another one!';
};

export default emailValidator;