document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.querySelector('[name="name"]');
    const emailInput = document.querySelector('[name="email"]');
    const phoneInput = document.querySelector('[name="phone"]');
    const passwordInput = document.querySelector('[name="psw"]');
    const passwordConfirmInput = document.querySelector('[name="mdp-confirm"]');
    const dobInput = document.querySelector('[name="dob"]');
    const genreInput = document.querySelector('[name="genre"]');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Vérification du nom
        if (nameInput.value.trim() === '') {
            alert('Le nom est requis');
            return;
        }
        
        // Vérification de l'email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            alert('Veuillez entrer un email valide');
            return;
        }

        
        // Vérification du téléphone
        const phonePattern = /^[0-9]{9}$/;
        if (!phonePattern.test(phoneInput.value.trim())) {
            alert('Veuillez entrer un numéro de téléphone valide (9 chiffres)');
            return;
        }
        
        // Vérification du mot de passe
        if (passwordInput.value.trim() === '') {
            alert('Le mot de passe est requis');
            return;
        }
        
        // Vérification de la confirmation du mot de passe
        if (passwordConfirmInput.value.trim() !== passwordInput.value.trim()) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }
        
        // Vérification de la date de naissance
        if (dobInput.value.trim() === '') {
            alert('La date de naissance est requise');
            return;
        }
        
        // Vérification du genre
        if (genreInput.value === '') {
            alert('Le genre est requis');
            return;
        }
        
        // Si tout est valide, on soumet le formulaire
        alert('Formulaire soumis avec succès!');
        form.submit();
    });
});
I