function Login() {
    if (model.inputs.login.username === checkUsername && model.inputs.login.username === checkPassword) {
        createPollView();
    }
}