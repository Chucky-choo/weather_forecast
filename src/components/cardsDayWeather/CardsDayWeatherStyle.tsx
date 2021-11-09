import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  container: {
    padding: 14,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))',
    gap: 14,
  },
});

export default useStyles