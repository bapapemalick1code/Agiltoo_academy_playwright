// Exportation des données de test pour les rendre disponibles dans d'autres fichiers
module.exports = {
  // Objet contenant les informations des utilisateurs
  users: {
    // Données de l'utilisateur valide pour les tests de connexion
    validUser: {
      username: 'testuser',       // Nom d'utilisateur valide
      password: 'password123',    // Mot de passe valide
    },
    // Données de l'utilisateur invalide pour les tests de connexion
    invalidUser: {
      username: 'invaliduser',    // Nom d'utilisateur invalide
      password: 'wrongpassword',  // Mot de passe invalide
    },
  },
  // Données pour un nouvel utilisateur à utiliser dans les tests d'inscription
  newUser: {
    username: 'newuser',                // Nom d'utilisateur pour le nouvel utilisateur
    password: 'newpassword123',         // Mot de passe pour le nouvel utilisateur
    email: 'newuser@example.com',       // Adresse email pour le nouvel utilisateur
  },
};
  