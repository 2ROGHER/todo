
// Let's define the basic regex patter to test whether the pwd is correct or no
const containNumber = /[0-9]\d{2,}/;
const containUpperLetter = /[A-Z]{3,}/
const containSpecialChars = /[\W_]{3,}/
/**
 * 
 * This is the basic implementation to validate the test input when the user
 * input values in the registration form.
 * @param {string} pwd Return true or false depending the value.
 */

const passwordValidator = (pwd) => {
    console.log(containNumber.test(pwd));
    if (!pwd.length) return 'Password field is empty';
    if (!containNumber.test(pwd)) return 'Password must contain at least 3 digits';
    if(!containUpperLetter.test(pwd)) return 'Password must contain at least 3 upper letters';
    if(!containSpecialChars.test(pwd)) return 'Password must contain at least 3 special chars';
    if(!pwd.length > 30) return 'Password it too long it mus be less';
};
export default passwordValidator;