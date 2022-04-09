import {authFirebase, authGoogle, bdFirestore} from './init';
import {signInWithPopup, onAuthStateChanged} from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore';

export function connexion(auth) {
    signInWithPopup(authFirebase, authGoogle);
}

export function deconnexion() {
    authFirebase.signOut();
}

export function observerEtatUtilisateur(mutateurEtatUtilisateur) {
    onAuthStateChanged(authFirebase,
        // Créer un objet <User> utilisateur
        utilisateur => {
            if (utilisateur) {
                // Référence au document Firestore qui sera créé
                const refDocFirestore = doc(bdFirestore, 'memo', utilisateur.uid);

                // Créer un document Firestore pour sauvegarder l'objet utilisateur
                setDoc(refDocFirestore, {
                    nom: utilisateur.displayName,
                    courriel: utilisateur.email,
                }, 
                
                {merge: true})
            }

            mutateurEtatUtilisateur(utilisateur);
        }
    )
}