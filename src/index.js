import React from 'react';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "redux/store";

import reportWebVitals from './reportWebVitals';
import App from './App';
import GlobalStyles from "./GlobalStyles";
import "./i18n"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyles />
      <App />
    </PersistGate>
  </Provider>
</React.StrictMode>)
// ReactDOM.render(
//   <React.StrictMode>
//     <IntlProvider locale={language} messages={messages[language]}>
//       <Provider store={store}>
//         <PersistGate persistor={persistor}>
//           <GlobalStyles />
//           <App />
//         </PersistGate>
//       </Provider>
//     </IntlProvider>
//   </React.StrictMode>,

//   // document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
