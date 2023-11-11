// Let's define a function that will allow us to mach the corret password
const matchConfirmPassword = (prevPwd, confirmPwd) => {
    if(!(prevPwd === confirmPwd)) return 'Password not matches, please try again';
};

export default matchConfirmPassword;