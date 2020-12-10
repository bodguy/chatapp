import React from 'react';

const Dashboard = () => (
    <h3>
        <div>API_URL: {process.env.API_URL}</div>
        <div>PUBLIC_URL: {process.env.PUBLIC_URL}</div>
        <div>PROFILE: {process.env.PROFILE}</div>
        <div>NODE_ENV: {process.env.NODE_ENV}</div>
    </h3>
);

export default Dashboard;