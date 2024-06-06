// Fonction asynchrone pour effectuer la connexion
async function login(page, username, password) {
  // Navigue vers l'URL de la page de connexion
  await page.goto('https://example.com/login');
  // Remplit le champ du nom d'utilisateur avec la valeur fournie
  await page.fill('#username', username);
  // Remplit le champ du mot de passe avec la valeur fournie
  await page.fill('#password', password);
  // Clique sur le bouton de soumission pour tenter de se connecter
  await page.click('button[type="submit"]');
}

// Fonction asynchrone pour effectuer la déconnexion
async function logout(page) {
  // Clique sur l'élément de déconnexion
  await page.click('#logout');
  // Attend que l'élément de connexion soit visible, indiquant que la déconnexion est réussie
  await page.waitForSelector('#login');
}

// Exportation des fonctions login et logout pour qu'elles puissent être utilisées dans d'autres fichiers
module.exports = { login, logout };