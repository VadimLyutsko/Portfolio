import style from './Contacts.module.css';
import React from 'react';
import {useFormik} from 'formik';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: values => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length <= 3) {
                errors.password = 'Password is too short'
            }
            return errors
        },
        onSubmit: values => {
            formik.resetForm()
        },
    })



    return (<Grid  id={'contacts'} container justifyContent={'center'}>
            <Grid item justifyContent={'center'}>

                <FormControl>
                    <form onSubmit={formik.handleSubmit}>
                        <FormGroup>
                            <TextField label="Email (for example)"
                                       margin="normal"
                                       name={'email'}
                                       onChange={formik.handleChange}
                                       value={formik.values.email}
                                       onBlur={formik.handleBlur}

                            />
                            {formik.errors.email && formik.touched.email &&
                                <div style={{color: 'red'}}> {formik.errors.email}</div>}
                            <TextField type="password"
                                       label="Password (for example)"
                                       margin="normal"
                                       name={'password'}
                                       onChange={formik.handleChange}
                                       value={formik.values.password}
                                       onBlur={formik.handleBlur}
                            />
                            {formik.errors.password && formik.touched.password &&
                                <div style={{color: 'red'}}> {formik.errors.password}</div>}

                            <FormControlLabel label={'Remember me'}
                                              control={<Checkbox
                                                  checked={formik.values.rememberMe} {...formik.getFieldProps('rememberMe')} />}/>

                            <Button type={'submit'} variant={'contained'} color={'primary'}>
                                Login (why not?)
                            </Button>
                        </FormGroup>
                    </form>
                    <FormLabel className={style.contactsForm}>
                        <p>Рад приветствовать dас в своей социальной сети </p>
                        <p>детальнее ознакомиться с моими проектамы вы можете <a
                            style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}
                            href={'https://vadimlyutsko.github.io/Portfolio/'}
                            target={'_blank'}> здесь
                        </a>
                        </p>

                    </FormLabel>
                </FormControl>
            </Grid>
        </Grid>
















        // <div id={'contacts'} className={style.contactsBlock}>
        //
        //     <div className={style.contacts}>
        //         <h3> Contacts form</h3>
        //         <form className={style.contactsForm}>
        //             <input className={style.inputForm} type="text"/>
        //             <input className={style.inputForm} type="text"/>
        //             <textarea className={style.inputTextArea} placeholder={'Enter text here'}></textarea>
        //         </form>
        //         <button className={style.contactsButton}>Send</button>
        //     </div>
        // </div>
    );
};

