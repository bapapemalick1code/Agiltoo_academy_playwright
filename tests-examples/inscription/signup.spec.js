// Importation des modules nécessaires pour les tests Playwright
const { test, expect } = require('@playwright/test');
// Importation des données de test depuis le fichier fixtures/data_test.js
const { newUser } = require('../../tests/fixtures/data_test');

// Définition d'un test pour vérifier si un utilisateur peut s'inscrire avec des informations valides
test('User can sign up with valid details', async ({ page }) => {
  // Navigue vers l'URL de la page d'inscription
  await page.goto('https://example.com/signup');
  // Remplit le champ du nom d'utilisateur avec la valeur fournie dans newUser.username
  await page.fill('#username', newUser.username);
  // Remplit le champ du mot de passe avec la valeur fournie dans newUser.password
  await page.fill('#password', newUser.password);
  // Remplit le champ de l'email avec la valeur fournie dans newUser.email
  await page.fill('#email', newUser.email);
  // Clique sur le bouton de soumission pour tenter de s'inscrire
  await page.click('button[type="submit"]');
  // Vérification que l'URL après l'inscription est bien celle attendue (page de bienvenue)
  await expect(page).toHaveURL('https://example.com/welcome');
  // Vérification que le texte de l'élément <h1> est celui attendu
  await expect(page.locator('h1')).toHaveText('Welcome, newuser!');
});
