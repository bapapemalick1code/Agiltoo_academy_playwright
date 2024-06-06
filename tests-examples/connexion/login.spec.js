// Importation des modules nécessaires pour les tests Playwright
const { test, expect } = require('@playwright/test');
// Importation des données de test depuis le fichier fixtures/data_test.js
const { users } = require('../../fixtures/data_test');
// Importation de la fonction de connexion depuis le fichier utils/helpers.js
const { login } = require('../../utils/helpers');

// Définition d'un test pour vérifier si un utilisateur peut se connecter avec des identifiants valides
test('User can log in with valid credentials', async ({ page }) => {
  // Utilisation de la fonction de connexion avec les identifiants valides
  await login(page, users.validUser.username, users.validUser.password);
  // Vérification que l'URL après la connexion est bien celle attendue (dashboard)
  await expect(page).toHaveURL('https://example.com/dashboard');
  // Vérification que le texte de bienvenue sur la page est celui attendu
  await expect(page.locator('h1')).toHaveText('Welcome, testuser!');
});

// Définition d'un test pour vérifier si un utilisateur ne peut pas se connecter avec des identifiants invalides
test('User cannot log in with invalid credentials', async ({ page }) => {
  // Utilisation de la fonction de connexion avec les identifiants invalides
  await login(page, users.invalidUser.username, users.invalidUser.password);
  // Vérification que le message d'erreur s'affiche correctement
  await expect(page.locator('.error-message')).toHaveText('Invalid credentials');
});

