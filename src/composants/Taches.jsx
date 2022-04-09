import Tache from './Tache';
import './Taches.scss';
import * as modeleTaches from '../code/modele-taches';
import {useEffect} from 'react';

export default function Taches({utilisateur, taches, setTaches}) {

    function gererFormulaireSoumission(idUtilisateur, event) {
        // Empecher de rafraichir la page onSubmit
        event.preventDefault();

        // Créer l'objet de la tâche
        const tache = {tache: event.target[0].value};

        // Réintialiser le champs de texte
        event.target[0].value = "";

        modeleTaches.creer(idUtilisateur, tache).then(
            (doc) => {setTaches([{id: doc.id, ...doc.data()}, ...taches]);}
        ).catch(
            erreur => {
                console.error(`Erreur pendant la création d'une tâche`, erreur);
            }
        )
    }

    useEffect(
        () => modeleTaches.obtenirTout(utilisateur.uid).then(
            taches => setTaches(taches)), [utilisateur, setTaches]
    );

    return (
        <section className="Taches">
        <form onSubmit={e => gererFormulaireSoumission(utilisateur.uid, e)}>
            <input 
                type="text"   
                placeholder="Ajoutez une tâche ..." 
                name="texteTache"
                autoComplete="off" 
            />
        </form>
        <div className="liste-taches">
            {
                taches.map(
                    tache => <Tache key={tache.id} {...tache}/>
                )
            }
        </div>
        </section>
    );
}