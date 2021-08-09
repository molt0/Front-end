import React from 'react';
import ReactDOM from 'react-dom';
import SpecificPage from './pages/SpecificPage'

import { BrowserRouter, Route } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Route exact path="/" component={SpecificPage} />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
