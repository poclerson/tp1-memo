import { getDocs, collection, Timestamp, addDoc, getDoc } from "firebase/firestore";
import { bdFirestore } from "./init";

/**
 * Obtient toutes les tâches d'un utilisateur
 * @param {string} idUtilisateur Identifiant Firebase de l'utilisateur connecté
 * @returns {Promise<any[]>} Tableau contenant toutes les tâches une fois la promesse complétée
 */
export async function obtenirTout(idUtilisateur) {
    return getDocs(
        collection(bdFirestore, `memo/${idUtilisateur}/taches`)).then(
            res => res.docs.map(
                doc => ({id: doc.id, ...doc.data()})
            )
    );
}

/**
 * Crée une tâche et l'insère dans la base de données Firestore
 * @param {string} idUtilisateur Identifiant Firebase de l'utilisateur connecté
 * @param {object} tache Objet de la tâche à ajouter à la base de données Firestore
 */
export async function creer(idUtilisateur, tache) {
    tache.date = Timestamp.now();

    return await getDoc(
        // Ajouter un document Firestore représentant une tache selon l'utilisateur
        await addDoc(
            // Référence
            collection(bdFirestore, `memo/${idUtilisateur}/taches`), 
            // Données
            tache,
            // Promesse
            {merge: true}
        )
    )
}