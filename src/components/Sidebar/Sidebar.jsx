import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledSidebar = styled.div`
 flex: 0 0 20%;
 background-color: #424242;
 color: white;
`;

const List = styled.ul`
    list-style: none;
    background-color: #494;
    min-height: 80px;
    padding: 25px;
`;

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

  render() {
    return (
      <StyledSidebar>
        <List>
                    <li>
                        <NavLink exact to={`/dashboard/home`} 
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red",
                                backgroundColor: "lightBlue"
                            }}
                            aria-current="page"
                            style={{color: 'white', textDecoration: 'none', lineHeight: '36px', width: '100%', display: 'block'}}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to={`/dashboard/diagram`} 
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red",
                                backgroundColor: "lightBlue"
                            }}
                            aria-current="page"
                            style={{color: 'white', textDecoration: 'none', lineHeight: '36px', width: '100%', display: 'block'}}
                        >
                            Diagram
                        </NavLink>
                    </li>
                </List>
      </StyledSidebar>
    )
  }
}
