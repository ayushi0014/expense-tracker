//rafce
import React, {useEffect, useState } from 'react'
// import React, { useState } from 'react'
import { Grid } from "@material-ui/core";
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import Details from './Details/Details'
import Main from './Main/Main'
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    let navigate = useNavigate()
    const [authToken, setAuthToken] = useState(false)
   
    useEffect(()=>{
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/')
        }

        if (!authToken) {
            navigate('/login')
        }
    },[authToken])
let onclick=()=>
{
    sessionStorage.setItem('Auth Token', "")
    setAuthToken(!authToken)
  
}
    const classes = useStyles();
    return (
        <div style ={{"background": "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://raw.githubusercontent.com/adrianhajdin/speechly_expense_tracker_project/main/src/assets/money.png)"}}>
            <button onClick={onclick} style={{display:'flex', alignItems:'right'}}>Logout</button>
            <Grid className={classes.grid} container spacing={0} alignItems="center" style={{ height: '100vh' }}>
                <Grid item xs={12} sm={3} className={classes.mobile}>
                    <Details title="Income" />
                </Grid>
                <Grid item xs={12} sm={5} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.desktop}>
                    <Details title="Income" />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.last}>
                    <Details title="Expense" />
                </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton />
                <ErrorPanel />
            </PushToTalkButtonContainer>
        </div>
    )
}

export default Dashboard
