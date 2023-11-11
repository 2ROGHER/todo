//Let's implement a function to validate the phone number validation

// Basic regex patter to validate only numbers input
const containNumbers = /[0-9]\d/
/**
 * This function allows us to validate the phone number with the user input.
 * @param {number} number True or False depending on the phone number. 
 */
const phoneValidation = (number) => {
    if(!number.length) return 'Phone is empty, please fill it';
    if(!containNumbers.test(number)) return 'Phone number must be only digits chars';
};

export default phoneValidation