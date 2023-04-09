// import { ContactForm } from 'components/ContactForm';
// import { GlobalStyle } from 'constants/GlobalStyles';
// import { ContactList } from 'components/ContactList';
// import { Filter } from 'components/Filter';
// import { Container, Wrap, MainTitle, Title, StyleArround } from './AppBar';
// import { Header } from 'components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import { Layout } from 'components/Layout';
import { LoginTTT } from 'pages/LoginTTT';
import { Register } from 'pages/Register';
import { ContactList } from './ContactList';

export const App = () => (
  <>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={<Register />}

          // element={
          //   <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />}
          // />
          // }
        />
        <Route
          path="/login"
          element={<LoginTTT />}
          // element={
          //   <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          // }
        />
        <Route
          path="/contacts"
          element={<ContactList />}
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
