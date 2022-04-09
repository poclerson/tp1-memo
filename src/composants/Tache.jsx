import './Tache.scss';
import * as modeleTache from '../code/modele-tache';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcona from '@mui/icons-material/RemoveCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Tache({tache, date}) {
  return (
    <div className="Tache">
      <IconButton>
          <CheckCircleIcon color="success" />
      </IconButton>
      <span className="texte">{tache}</span>
      <span className="date">{modeleTache.dateSelonTimestamp(date)}</span>
      <IconButton color="primary">
          <RemoveCircleIcon color="error" />
      </IconButton>
    </div>
  );
}