import React, {FC} from 'react';
import {Form, Formik} from 'formik';
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import CustomizedInputBase from "./CustomizedInputBase";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  }
}));

const validation = yup.object().shape({
  newCity: yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
})

const InputNewCity: FC = () => {
  const classes = useStyles();

  const navigate = useNavigate()

  return (
    <Formik
      initialValues={{newCity: '',}}
      validationSchema={validation}
      onSubmit={values => {
        navigate(`/in/${values.newCity}`, {replace: true})
      }}
    >
      <Form className={classes.wrapper}>
        <CustomizedInputBase
          type='text'
          name='newCity'
          placeholder="Name of the city"
        />
      </Form>
    </Formik>
  );
};

export default InputNewCity;
