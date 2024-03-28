document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('signupBtn').addEventListener('click', function () {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const gender = document.getElementById('gender').value;
        const birthDate = document.getElementById('birthDate').value;

        // Verificação básica: confirmação de e-mail e senha
        const confirmEmail = document.getElementById('confirmEmail').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (email !== confirmEmail) {
            alert('Os e-mails não coincidem.');
            return;
        }

        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }

        const newUser = new User(firstName, lastName, email, password, gender, birthDate);
        const userInfo = `Informações do Usuário:\nNome: ${newUser.firstName} ${newUser.lastName}\nE-mail: ${newUser.email}\nGênero: ${newUser.gender}\nData de Nascimento: ${newUser.birthDate}`;
        alert(userInfo);

        
    });
});

class User {
    constructor(firstName, lastName, email, password, gender, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.birthDate = birthDate;
    }
}
