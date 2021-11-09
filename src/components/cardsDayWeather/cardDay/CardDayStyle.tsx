import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  cardContent :{
    maxHeight: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  } ,
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 5,
  },
});

export default useStyles