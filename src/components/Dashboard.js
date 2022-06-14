//rafce
import React from 'react'
import { Grid } from "@material-ui/core";
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import Details from './Details/Details'
import Main from './Main/Main'
import useStyles from './styles';

const Dashboard = () => {
    const classes = useStyles();
    return (
        <div style ={{"background": "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://raw.githubusercontent.com/adrianhajdin/speechly_expense_tracker_project/main/src/assets/money.png)"}}>
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