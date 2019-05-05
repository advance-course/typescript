import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Flex } from 'antd-mobile';

import Catalogue from 'pages/Catalogue';
import Profile from 'pages/Profile';

interface HomeProps {}
interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <Flex>
          <NavLink to="/catalogue" activeClassName="active">目录</NavLink>
          <NavLink to="/profile" activeClassName="active">我的</NavLink>
        </Flex>

        <Route path="/catalogue" component={Catalogue} />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
}

export default Home;