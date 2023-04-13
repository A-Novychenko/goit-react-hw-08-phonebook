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
          autoHideDuration={2000}
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
            variant="filled"
          >
            {text}
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
};

export const SnackSuccess = ({ isOpen, handleClose }) => {
  const position = {
    vertical: 'top',
    horizontal: 'right',
  };

  return (
    <>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          open={isOpen}
          autoHideDuration={2000}
          onClose={handleClose}
          anchorOrigin={{ ...position }}
          key={position.vertical + position.horizontal}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%', vertical: 'top', horizontal: 'right' }}
            elevation={6}
            variant="filled"
          >
            Success
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
};

export const SnackWarning = ({ isOpen, handleClose, text }) => {
  const position = {
    vertical: 'top',
    horizontal: 'right',
  };

  return (
    <>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          open={isOpen}
          autoHideDuration={2000}
          onClose={handleClose}
          anchorOrigin={{ ...position }}
          key={position.vertical + position.horizontal}
        >
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: '100%', vertical: 'top', horizontal: 'right' }}
            elevation={6}
            variant="filled"
          >
            {text}
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
};
