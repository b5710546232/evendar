import React, { Component } from 'react'
import { Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'
import 'material-design-icons/iconfont/material-icons.css'
import styled from 'react-emotion'

import './App.css'
import Debug from './Debug'
import Home from './containers/Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navigation from './components/BottomNavigation'
import Calendar from './components/Calendar'
import EventDetail from './components/EventDetail'
import LoginPage from './containers/LoginPage'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <Switch>
              <ContentContainer>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/" component={Home} />
                <Route path="/calendar" component={Calendar} />
                <Route exact path="/debug" component={Debug} />
                <Route exact path="/events/:id" component={EventDetail} />
              </ContentContainer>
            </Switch>
            <Navigation
              routes={[
                { path: '/', name: 'Home', icon: 'home' },
                { path: '/calendar', name: 'Calendar', icon: 'event' }
              ]}
            />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App

const ContentContainer = styled.div`
  position: absolute;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 56px;
  left: 0;
`
