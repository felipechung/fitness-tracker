import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export const ModalComponent = ({ open, handleClose, children, width }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: width || 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '12px',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};
