import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const CircularLoading = () => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress
        sx={{
          color: (theme) => theme.palette.secondary.main,
        }}
      />
    </Box>
  );
};
