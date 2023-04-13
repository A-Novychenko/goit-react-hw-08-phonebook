import { Alert, Snackbar, Stack } from '@mui/material';

export const SnackError = ({ isOpen, handleClose, text }) => {
  const position = {
    vertical: 'top',
    horizontal: 'right',
  };

  return (
    <>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          open={isOpen}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ ...position }}
          message={text}
          key={position.vertical + position.horizontal}
        >
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{ width: '100%', vertical: 'top', horizontal: 'right' }}
            elevation={6}
            // ref={ref}
            variant="filled"
          >
            {text}
            {/* This is a success message! error */}
          </Alert>
        </Snackbar>
        {/* <Alert severity="error">This is an error message!</Alert>
        <Alert severity="warning">This is a warning message!</Alert>
        <Alert severity="info">This is an information message!</Alert>
        <Alert severity="success">This is a success message!</Alert> */}
      </Stack>
    </>
  );
};
