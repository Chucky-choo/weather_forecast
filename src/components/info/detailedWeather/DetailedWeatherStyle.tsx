import {makeStyles} from "@material-ui/core";

export const useFlexCenter = makeStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    border: '1px solid black',
    margin: 14,
    borderRadius: 16,
  },
});