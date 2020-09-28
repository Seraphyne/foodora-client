import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';
import { DishProvider } from './Context/DishListContext';
import { RestContextProvider } from './Context/RestContext';

//WRAP OF ALL CONTEXTS NECESSARY 
ReactDOM.render(
  <BrowserRouter>
      <RestContextProvider>
        <DishProvider> 
            <App />
        </DishProvider>
      </RestContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

