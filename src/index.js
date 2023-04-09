import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'constants/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {/* <BrowserRouter basename="/goit-react-hw-08-phonebook"> */}
      <BrowserRouter>
        <App />
        <GlobalStyle />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
