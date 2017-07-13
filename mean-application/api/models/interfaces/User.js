// Create custom view models for our different forms
export function modelRegister () {
    this.username = "";
    this.email = "";
    this.password = "";
    this.confirm_password = "";
};// end interface class User

export function modelLogin () {
    this.email = "";
    this.password = "";
};// end interface class User