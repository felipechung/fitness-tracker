import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard({ title, value, unity }) {
  return (
    <Card
      sx={{ minWidth: 275, backgroundColor: 'var(--secondary-color)' }}
      variant="outlined"
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 24, color: 'var(--text-color)' }}
          gutterBottom
        >
          {title}
        </Typography>

        <Typography
          sx={{
            mb: 1,
            fontSize: 18,
            alignSelf: 'flex-end',
            color: 'var(--text-color)',
          }}
        >
          {value} {unity && unity}
        </Typography>
      </CardContent>
    </Card>
  );
}
