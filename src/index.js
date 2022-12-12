import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { ThemeProvider } from 'styled-components';
// import { PersistGate } from 'redux-persist/integration/react';
import { theme } from 'components/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
