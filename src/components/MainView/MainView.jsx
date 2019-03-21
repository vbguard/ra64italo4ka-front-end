import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import Home from '../../components/Home/Home';
import Diagram from '../../components/Diagram/Diagram';
import styled from 'styled-components';

const  StyledMainView = styled.div`
    flex: 0 0 80%
`;

class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <StyledMainView>
                <Route path={`/dashboard/home`} component={Home} />
                <Route path={`/dashboard/diagram`} component={Diagram} />
            </StyledMainView>
        );
    }
}

export default MainView;