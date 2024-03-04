const userData = [
    {"email":"maria@gmail.com","password":"123456","name":"John Doe","role":"student"},
    {"email":"SamMariam@gmail.com","password":"123456","name":"John Doe","role":"lecturer"}
  ];

  function fillCredentials(role) {
    const user = userData.find(user => user.role === role);
    if (user) {
      document.getElementById('emailLogin').value = user.email;
      document.getElementById('passwordLogin').value = user.password;
    }
  }