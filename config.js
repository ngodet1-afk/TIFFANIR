/* ============================================================
 * CONFIGURATION (config.js, à la racine du site) — ton seul fichier de réglages.
 * Les mises à jour de l'appli ne remplacent QUE index.html : ce fichier n'est jamais écrasé.
 * ============================================================
 * boardUrl : URL de l'application Web Google Apps Script (se termine par /exec).
 *            Laisser vide = pas de classement partagé (progression locale seulement).
 * teamCode : code d'équipe (le même que TEAM_CODE dans le script). Peut aussi être
 *            donné dans le lien : https://…/index.html?equipe=MONCODE (mémorisé ensuite).
 * refreshSeconds : fréquence de mise à jour du classement.
 */
(function (root) {
  root.TF.CONFIG = {
    boardUrl: '',
    teamCode: '',
    refreshSeconds: 30
  };
})(this);
