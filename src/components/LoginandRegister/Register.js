import React, {useState} from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, } from '@material-ui/core'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { typography } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormHelperText } from '@material-ui/core'
import * as Yup from 'yup'
import axios from 'axios'

const Register = () => {
    const [serverError, setserverError] = useState(null)
    const [successMessage, setsuccessMessage] = useState(null)
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#80ffaa' }
    const headerStyle = { margin: '0' }
    const btnStyle = { margin: '10px 0' }
    const radioStyle = { marginTop: 5 }
    const errorStyle = {backgroundColor:'red', color:'red'}
    const initialValues={
        username:'',
        email:'',
        gender:'',
        password:'',
        confirmpassword:'',
        profile: 'https://pixabay.com/illustrations/icon-user-avatar-profile-person-5404125/'

    }
    const validationSchema=Yup.object().shape({
        username:Yup.string().min(8,"It's too short").required("Required Username!"), 
        email:Yup.string().email("Enter valid email").required("Required Email!"),
        gender:Yup.string().oneOf(["male","female"], "Required"),
        password:Yup.string().min(8, "Password minimum should be 8").required("Required Password!"),
        confirmpassword:Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required Confirm Password!")
    })
    const onSubmit= async(values,props)=>{
      
        setTimeout(async() => {

            try {
                const res = await axios.post("http://localhost:4000/api/admin/register", {
                    username: values.username,
                    password: values.password,
                    email: values.email,
                    gender: values.gender,
                    profile: values.profile,
                })
                if(res){
                    setsuccessMessage(res.data.successMessage)
                    props.resetForm()
                }
            } catch (error) {
                setserverError(error.response.data.error)
            }

            // props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }
  
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AddCircleOutlinedIcon /></Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Fill up this form to create an account:</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            
                            <p style={{color:'red', fontSize: 12, textAlign: 'center', width: '100%'}}>{serverError}</p>
                            <p style={{color:'green', fontSize: 12, textAlign: 'center', width: '100%'}}>{successMessage}</p>
                            <Field as={TextField} name="username" label='Username'
                             placeholder="Enter your Username"  fullWidth  />
                             <ErrorMessage name="username">
                             { msg => <p style={{ color: 'red', fontSize: 10 }}>{msg}</p> }
                             </ErrorMessage>
                            <Field as={TextField}  name="email" label='Email'
                            placeholder="Enter your Email" fullWidth />
                            <ErrorMessage name="email">
                             { msg => <p style={{ color: 'red', fontSize: 10 }}>{msg}</p> }
                             </ErrorMessage>
                            <FormControl component="fieldset" style={radioStyle}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <Field as={RadioGroup}
                                    aria-label="gender"
                                    name="gender"
                                    style={{ display: 'initial' }}
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Female" />
                                    <FormControlLabel value="female" control={<Radio />} label="Male" />
                                </Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name="gender"/></FormHelperText>
                            <Field as={TextField}  name="password" label='Password' type='password'
                            fullWidth />
                            <ErrorMessage name="password">
                             { msg => <p style={{ color: 'red' , fontSize: 10}}>{msg}</p> }
                             </ErrorMessage>
                            <Field as={TextField}  name="confirmpassword" type='password'
                           label='Confirm Password' fullWidth />
                           <ErrorMessage name="confirmpassword">
                             { msg => <p style={{ color: 'red' , fontSize: 10}}>{msg}</p> }
                             </ErrorMessage>
                            <FormControlLabel
                                control={
                                    <Field as={Checkbox}
                                        color="primary"
                                    />
                                }
                                label="I accept the terms and conditions."
                            />
                             <FormHelperText><ErrorMessage name="termsandcondition"/></FormHelperText>
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting} style={btnStyle} fullWidth> {props.isSubmitting? "Loading": "Sign up"}  </Button>
                        </Form>

                    )}
                </Formik>

            </Paper>
        </Grid>
    )
}
export default Register;