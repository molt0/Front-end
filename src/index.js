import React from 'react';
import ReactDOM from 'react-dom';
import SpecificPage from './pages/SpecificPage'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import ContentEditor from './pages/SpecificPage/ContentEditor'
import { BrowserRouter, Route } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter basename="/4">
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/editor" component={ContentEditor} />
        <Route path="/specific" component={SpecificPage} />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
