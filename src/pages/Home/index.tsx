import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Flex } from 'antd-mobile';
import Catalogue from 'pages/Catalogue';
import Profile from 'pages/Profile';
import './index.scss';

interface HomeProps {}
interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <Flex className="home_container" direction="column">
        <div className="content">
          <Route exact path="/" component={Catalogue} />
          <Route path="/profile" component={Profile} />
        </div>
        
        <Flex className="nav" justify="around">
          <NavLink to="/" className="navitem catalogue" activeClassName="active">
            <Flex direction="column">
              <div className="icon" />
              <div className="label">课程</div>
            </Flex>
          </NavLink>
          <NavLink to="/profile" className="navitem profile" activeClassName="active">
            <Flex direction="column">
              <div className="icon" />
              <div className="label">我的</div>
            </Flex>
          </NavLink>
        </Flex>
      </Flex>
    );
  }
}

export default Home;