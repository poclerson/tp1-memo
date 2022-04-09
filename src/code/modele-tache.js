/**
 * Retourne la date selon le format suivant:
 * 9 avril 2022
 * @param {number} timestamp Timestamp en secondes
 * @returns {string} Date formattée
 */
export function dateSelonTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000);
    const listeMois = [
        'janvier', 
        'février', 
        'mars', 
        'avril', 
        'mai', 
        'juin', 
        'juillet', 
        'août', 
        'septembre', 
        'octobre', 
        'novembre', 
        'décembre'
    ];

    return `
        ${date.getDate()} 
        ${listeMois[date.getMonth()]} 
        ${date.getFullYear()} à 
        ${ajouterZero(date.getHours())}:${ajouterZero(date.getMinutes())}:${ajouterZero(date.getSeconds())}
    `;
}

/**
 * Ajouter un 0 devant une unité de temps qui n'aurait qu'un seul caractère 
 * Exemple: 12:05:07 apparaitrait 12:5:7
 * @param {number} uniteTemps Heure, minute ou seconde d'un temps
 * @returns {string} Unité de temps formattée avec un 0 ajouté si nécessaire
 */
function ajouterZero(uniteTemps) {
    if (String(uniteTemps).length <= 1) {
        return `0${uniteTemps}`;
    }

    return String(uniteTemps);
}