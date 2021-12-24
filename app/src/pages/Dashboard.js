import React from 'react';
import app from '../components/base';
import NavBar from '../components/NavBar';
function Dashboard() {
    return (
        <> 
            <NavBar />

            <h1>dashboard</h1>
            <button onClick={()=> app.auth().signOut()}>sign out</button>
        </>
    )
}

export default Dashboard;
