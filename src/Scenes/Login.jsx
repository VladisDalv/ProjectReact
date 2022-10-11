import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import {Form, Formik } from 'formik';
import FormikInput from '../Сomponents/FormikFileds/FormikInput';

const StyledLoginPage = styled.div`
    background-color: ${props => props.theme.partBackgroundColor};
`
const LoginPage = (props) =>{
    return (
        <StyledLoginPage>
            <Formik>
                <Form>
                    <FormikInput name={'Login'} placeholder={'input login'} type={'email'}/>
                    <FormikInput name={'Password'} placeholder={'input password'} type={'password'}/>
                    <button type={'submit'}>Login</button>
                </Form>
            </Formik>
        </StyledLoginPage>
);
};

LoginPage.propTypes = {};
LoginPage.defaultProps = {};

export default LoginPage;