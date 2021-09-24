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
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import { ToastContainer } from "react-toastify"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter basename="/4">
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/specific/editor/:title_artist" component={ContentEditor} />
        {/* <Redirect from="/specific/editor/:title_artist" to="/specific/editor/:title_artist/intro" /> */}

        <Route path="/specific/:title_artist" component={SpecificPage} />
        <Route path="/search" component={SearchPage} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/signup" component={SignUpPage} />
        
        <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
