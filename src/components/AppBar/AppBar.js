// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';

// import { ContactPhone } from '@mui/icons-material';
import {
  AppBar as AppBarContainer,
  Box,
  //   Toolbar,
  //   Typography,
  //   Button,
  //   IconButton,
  Container,
  //   Link,
} from '@mui/material';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
// import { NavLink } from 'react-router-dom';

// import MenuIcon from '@mui/icons-material/Menu';

export const AppBar = () => {
  return (
    <Box component={'header'}>
      {/* <Box sx={{ flexGrow: 1 }} component={'header'}> */}
      <AppBarContainer position="static">
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Navigation />
            {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
            {false ? <UserMenu /> : <AuthNav />}
          </Box>
        </Container>
      </AppBarContainer>
    </Box>
  );
};
