// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
// import css from './UserMenu.module.css';

import { Box, Button, Typography } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const UserMenu = () => {
  //   const dispatch = useDispatch();
  //   const { user } = useAuth();

  return (
    <Box
      component={'div'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
    >
      {/* <p>Welcome, {user.name}</p> */}
      <Box sx={{ display: 'flex' }}>
        <AccountBoxIcon sx={{ mr: 1 }} />
        <Typography>Welcome, {'User Name'}</Typography>
      </Box>
      {/* <button type="button" onClick={() => dispatch(logOut())}> */}
      <Button component="button" type="button" variant="outline">
        Logout
      </Button>
    </Box>
  );
};
