import React from 'react';
import ReactDOM from 'react-dom';
import SpecificPage from './pages/SpecificPage'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import SearchPage from './pages/SearchPage'
import UserPage from './pages/UserPage'
import SignUpPage from './pages/SignUpPage'
import NotFoundPage from './pages/404';
import ContentEditor from './pages/SpecificPage/ContentEditor'
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import { ToastContainer } from "react-toastify"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter basename="/4">
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/editor" component={ContentEditor} />
        <Route path="/specific" component={SpecificPage} />
        <Route path="/search" component={SearchPage} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/404" component={NotFoundPage} />
      </BrowserRouter>
      <ToastContainer />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
