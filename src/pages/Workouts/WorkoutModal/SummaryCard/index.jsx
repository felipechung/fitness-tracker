import './index.css';
import ClearIcon from '@mui/icons-material/Clear';
export const SummaryCard = () => {
  return (
    <div className="summaryCard">
      <span>Supino - 3 sets - 12 reps - 20 kg</span>{' '}
      <ClearIcon color="danger" style={{ cursor: 'pointer' }} />
    </div>
  );
};
