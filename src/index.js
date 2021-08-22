import React from 'react';
import ReactDOM from 'react-dom';
import SpecificPage from './pages/SpecificPage'
import ContentEditor from './pages/SpecificPage/ContentEditor'
import Header from './components/global/Header'
import { BrowserRouter, Route } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
      <Header />
        <Route exact path="/" component={SpecificPage} />
        <Route exact path="/editor" component={ContentEditor} />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
