const Notification = {
  signUpFail() {
    Flash.alert(
      "Erro ao criar conta",
      "Algo deu ruim. Tenta de novo mais tarde.",
    );
    return Notification;
  },
};

export default Notification;
