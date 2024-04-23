import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export default function BasicCard({ title, value, unity }) {
  return (
    <Card
      sx={{
        minWidth: 275,
        backgroundColor: 'var(--secondary-color)',
        padding: '15px',
        borderRadius: '15px',
      }}
      variant="outlined"
    >
      <Typography
        sx={{ fontSize: 24, fontWeight: 600, color: 'var(--text-color)' }}
        gutterBottom
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: 18,
          color: 'var(--text-color)',
        }}
      >
        {value} {unity && unity}
      </Typography>
    </Card>
  );
}
