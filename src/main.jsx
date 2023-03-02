import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import { MainChainProvider } from './context/MainChain';
import { store } from './redux/store'
import { Provider } from 'react-redux'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <BrowserRouter>
    <Provider store={store}>
      <MainChainProvider>
          <App />
      </MainChainProvider>  
    </Provider>
  </BrowserRouter>
);