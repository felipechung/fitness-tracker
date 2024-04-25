import Select from '@mui/material/Select';

export const CustomSelect = ({ selectedOption, handleChange, children }) => {
  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
      sx={{
        width: '100%',
        height: '44px',
        bgcolor: '#f4f4f4',
        borderRadius: '12px',
        color: 'primary.main',
        border: '1px solid',
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'initial', // Keeps the border color unchanged on hover
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'initial', // Default non-hover border color
        },
      }}
    >
      {children}
    </Select>
  );
};
