import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
      padding: '2%'
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      padding: '2%'
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
      padding: '2%'
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
      padding: '2%'
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(4),
    },
  },
}));