const Notification = {
  signInFail() {
    alert(
      "Ops! Não conseguimos fazer seu login. Confere e-mail e senha e tenta de novo.",
    );
    return Notification;
  },
};

export default Notification;
