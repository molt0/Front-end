import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/global/Header'
import SpecificPage from './pages/SpecificPage'
import MainPage from './pages/MainPage'
import ContentEditor from './pages/SpecificPage/ContentEditor'
import { BrowserRouter, Route } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
      <Header />
        <Route exact path="/" component={SpecificPage} />
        <Route exact path="/editor" component={ContentEditor} />
        <Route exact path="/main" component={MainPage} />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
