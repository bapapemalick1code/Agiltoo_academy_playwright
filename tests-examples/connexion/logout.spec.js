// Importation des modules nécessaires pour les tests Playwright
const { test, expect } = require('@playwright/test');
// Importation des données de test depuis le fichier fixtures/data_test.js
const { users } = require('../../tests/fixtures/data_test');
// Importation des fonctions de connexion et de déconnexion depuis le fichier utils/helpers.js
const { login, logout } = require('../../tests/utils/helpers');

// Définition d'un test pour vérifier si un utilisateur peut se déconnecter
test('User can log out', async ({ page }) => {
  // Utilisation de la fonction de connexion avec les identifiants valides
  await login(page, users.validUser.username, users.validUser.password);
  // Utilisation de la fonction de déconnexion
  await logout(page);
  // Vérification que l'URL après la déconnexion est bien celle de la page de connexion
  await expect(page).toHaveURL('https://example.com/login');
});
