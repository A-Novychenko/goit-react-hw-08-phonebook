import { NavLink as RouterNavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <div>
      <Button component={RouterNavLink} variant={'outline'} to="/register">
        Register
      </Button>
      <Button component={RouterNavLink} variant={'outline'} to="/login">
        Log In
      </Button>
    </div>
  );
};

//  <Link component={RouterLink} to="/">
//    Link to Home
//  </Link>;
