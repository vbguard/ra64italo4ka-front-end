import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainView from '../../components/MainView/MainView';
import styled from 'styled-components';

const DashboardWrap = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

const Dashboard = props => {
    const {match} = props;
    console.log(props);
    console.log(match);

    return (
        <DashboardWrap>
            <Sidebar />
            <MainView />
        </DashboardWrap>
    );
}

export default Dashboard;