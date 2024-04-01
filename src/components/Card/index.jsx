import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard({ title, value }) {
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>

        <Typography
          sx={{ mb: 1, fontSize: 18, alignSelf: 'flex-end' }}
          color="text.secondary"
        >
          {value}
        </Typography>
        <Typography variant="body2"></Typography>
      </CardContent>
    </Card>
  );
}
