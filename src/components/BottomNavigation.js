import React from 'react'
import { Paper, BottomNavigation, BottomNavigationItem, FontIcon } from 'material-ui'
import styled from 'react-emotion'
import { withState, compose } from 'recompose'
import { withRouter } from 'react-router-dom'

const Navigation = ({ routes, page, setPage, history }) => (
  <StickyBottom>
    <Paper zDepth={1}>
      <BottomNavigation selectedIndex={page}>
        {routes.map((route, index) => (
          <BottomNavigationItem
            style={{ fontSize: 16 }}
            label={route.name}
            key={route.name}
            icon={<FontIcon className="material-icons">{route.icon}</FontIcon>}
            onClick={() => {
              history.push(route.path)
              setPage(index)
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  </StickyBottom>
)

export default compose(
  withRouter,
  withState('page', 'setPage', ({ routes, location }) => routes.findIndex(route => route.path === location.pathname))
)(Navigation)

const StickyBottom = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
`
