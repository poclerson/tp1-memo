import './Utilisateur.scss';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import {deconnexion} from '../code/modele-utilisateur';

export default function Utilisateur({nom, courriel}) {
    return (
        <div className="Utilisateur">
            <span className="nom">{nom}</span>
            <Avatar className="avatar" alt="{nom}" title="{courriel}" />
            
            <Button 
                variant="outlined"
                size="small"
                className="btn-deconnexion"
                onClick={deconnexion}
            >
                Déconnexion
            </Button>
        </div>
    );
}