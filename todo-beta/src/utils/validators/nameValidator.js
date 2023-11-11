
/**
 * This function is responsible for the validation of the name
 * input when the user fill the name field in the registration form.
 * @param {string} name 
 */
function nameValidator(name) {
    if(!name.length) return 'Name field is empty, please fill it in!';
    if(name.length < 3) return 'Name value is too short, please choose other'
    if(name.length > 35) return 'Name value is to long, please it must be less!';
};

export default nameValidator;