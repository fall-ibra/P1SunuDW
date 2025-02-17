// Vérification que le DOM est bien chargé
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");
    var name = document.getElementById("name");
    var tel = document.getElementById("phone");
    var email = document.getElementById("email");
    var errorMessage = document.getElementById("error-message");

    form.onsubmit = function (e) {
        if (!name.value.trim() || !email.value.trim() || !tel.value.trim()) {
            e.preventDefault();
            if (errorMessage) {
                errorMessage.textContent = "Veuillez remplir tous les champs obligatoires.";
                errorMessage.style.color = "red";
            }
        }
    };
});
