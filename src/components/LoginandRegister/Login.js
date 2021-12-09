import React, {useState} from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const Login =  () => {
    const [serverError, setserverError] = useState(null)
    const [successMessage, setsuccessMessage] = useState(null)
    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#80ffaa' }
    const btnStyle = { margin: '10px 0' }
    const initialValues={
        email:'',
        password:'',

    }
    const validationSchema=Yup.object().shape({
        email:Yup.string().email("Enter valid email").required("Required Email!"),
        password:Yup.string().min(8, "Password minimum should be 8").required("Required Password!"),
    })

    const onSubmit= async(values,props)=>{
      
        setTimeout(async() => {
    
            try {
                const res = await axios.post("http://localhost:4000/api/admin/login", {
                    email: values.email,
                    password: values.password,
                   
                })
                if(res){
                    setsuccessMessage(res.data.successMessage)
                    props.resetForm()
                }
            } catch (error) {
                setserverError(error.response.data.error)
            }
            // console.log(values)
    
            // props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }

        return (
    
            <Grid>

                <Formik initialValues={initialValues} validationSchema={validationSchema}  onSubmit={onSubmit} >
                {(props) => (
                <Form>
                    <p style={{color:'red', fontSize: 12, textAlign: 'center', width: '100%'}}>{serverError}</p>
                    <p style={{color:'green', fontSize: 12, textAlign: 'center', width: '100%'}}>{successMessage}</p>
                 <Paper style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2> Sign in</h2>
                    </Grid>
                    <Field as={TextField} name="email" label='Email'
                             placeholder="Enter your Email"  fullWidth  />
                     <ErrorMessage name="email">
                             { msg => <p style={{ color: 'red', fontSize: 10 }}>{msg}</p> }
                     </ErrorMessage>         
                    <Field as={TextField}  name="password" label='Password' type='password'
                           placeholder="Enter your Password"fullWidth />
                     <ErrorMessage name="password">
                             { msg => <p style={{ color: 'red', fontSize: 10 }}>{msg}</p> }
                     </ErrorMessage>
                    <FormControlLabel
                        label="Parent"
                        control= {
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Button type='submit' color='primary' variant="contained" style={btnStyle} fullWidth> Sign in </Button>
                    <Typography>
                        <Link href="#" >
                            Forgot password? 
                        </Link>
                    </Typography>
                    {/* <Typography> Do you have an account? 
                         <Link href="#" onClick={()=>handleChange("event", 1)}>
                                Sign Up
                        </Link>
                       
                       
                        </Typography> */}
                    </Paper>
             </Form>
            )}
            </Formik>
        </Grid>
      
      )
}
export default Login
