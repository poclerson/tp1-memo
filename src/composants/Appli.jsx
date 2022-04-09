// React
import {useState, useEffect} from 'react';

// Composants et styles
import './Appli.scss';
import logo from '../images/memo-logo.png';
import Controle from './Controle';
import Taches from './Taches';
import Accueil from './Accueil';
import Utilisateur from './Utilisateur';

// Firebase
import {observerEtatUtilisateur} from '../code/modele-utilisateur';

export default function Appli() {

    // État utilisateur
    const [utilisateur, setUtilisateur] = useState(null);
    useEffect(() => observerEtatUtilisateur(setUtilisateur), []);

    // État des tâches
    const [taches, setTaches] = useState([]);

  return (
      utilisateur ?
        <div className="Appli">
            <header className="appli-entete">
                <img src={logo} className="appli-logo" alt="Memo" />
                
                <Utilisateur nom={utilisateur.displayName} courriel={utilisateur.email} />
            </header>
            <Taches utilisateur={utilisateur} taches={taches} setTaches={setTaches} />
            <Controle />
        </div>
    :
      <Accueil />
  );
}
