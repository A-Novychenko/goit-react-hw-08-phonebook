// import { ContactForm } from 'components/ContactForm';
// import { GlobalStyle } from 'constants/GlobalStyles';
// import { ContactList } from 'components/ContactList';
// import { Filter } from 'components/Filter';
// import { Container, Wrap, MainTitle, Title, StyleArround } from './AppBar';
// import { Header } from 'components/Header/Header';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from 'pages/Home';
import { Layout } from 'components/Layout';
// import Login as LoginPage from 'pages/LoginTTT';
// import { Register } from 'pages/Register';
// import { ContactList } from './ContactList';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => (
  <>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="register"
          element={<RegisterPage />}

          // element={
          //   <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />}
          // />
          // }
        />

        <Route
          path="login"
          element={<LoginPage />}
          // element={
          //   <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          // }
        />

        <Route
          path="contacts"
          element={<ContactsPage />}
          // element={
          //   <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          // }
        />
      </Route>
    </Routes>
    {/* <Container>
      <Wrap>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />

        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Wrap>
      <StyleArround />
      <GlobalStyle></GlobalStyle>
    </Container> */}
  </>
);
