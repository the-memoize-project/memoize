const Notification = {
  signInFail() {
    Flash.alert(
      "E-mail ou senha inválidos!",
      "Confere suas credenciais e tenta de novo.",
    );
    return Notification;
  },
};

export default Notification;
