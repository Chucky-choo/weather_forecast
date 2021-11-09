import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import React, {FC} from "react";
import {useField} from 'formik';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 290,
    marginBottom: 10
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  error: {
    color: 'tomato',
    margin: 8
  }
}));

interface Props {
  type: string,
  name: string
  placeholder: string
}


const CustomizedInputBase: FC<Props> = (props) => {
  const classes = useStyles();

  const [field, meta] = useField(props);

  return (
      <Paper className={classes.root}>
        <InputBase
          name="newCity"
          className={classes.input}
          placeholder={props.placeholder}
          inputProps={field}
        />
        {meta.touched && meta.error ? (
          <>
            <Divider
              className={classes.divider}
              orientation="vertical"
            />
            <p className={classes.error}>
              {meta.error}
            </p>
          </>
        ) : null}
        <Divider
          className={classes.divider}
          orientation="vertical"
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon/>
        </IconButton>
      </Paper>
  );
}

export default CustomizedInputBase