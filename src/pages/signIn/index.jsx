import React from "react";
import styles from "./styles.module.scss";
import googleLogo from "../../assets/icons/Google__G__Logo 1.svg";
import logo from "../../assets/icons/Logo.svg";
import Input from "../../components/input";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
function SignUp() {


  const scheme = yup.object().shape({
    userFullName: yup.string().min(3, "В поле должно быть минимум 3 символа").required("Full Name is required").transform(value => value === '' ? undefined : value),
    userEmail: yup.string().email("Invalid email format").min(5, "В поле должно быть минимум 5 символов").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "неправильно").required("Mail is required").transform(value => value === '' ? undefined : value),
    userPassword: yup.string().required("Password is required").min(8, "В поле должно быть минимум 8 символов"),
    userConfirmPassword: yup.string().required("Password confirmation is required").oneOf([yup.ref('userPassword'), null], 'Passwords must match')
  })
  
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(scheme),
    mode: "onBlur",
    defaultValues: {
      userFullName: "",
      userEmail: "",
      userPassword: "",
      userConfirmPassword: ""
    },
  });

  const onSubmit = (data) => {
    console.log("data", data);
    reset()
  };

  return (
    <div className={styles.cardLognIn}>
      <div className={styles.box}>
        <div className={styles.logoWrap}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.LogInHeadline}>
          <h2>Log in to your Account</h2>
          <p>Sign up now to get started with an account.</p>
        </div>
      </div>
      <div className={styles.inputSection}>
        <button className={styles.btnGoogle}>
          <img src={googleLogo} alt="google" />
          Continue with Google
        </button>
        <div className={styles.orSeperator}>
          <div className={styles.line}></div>
          <p>OR</p>
          <div className={styles.line}></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
            name="userFullName"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <Input
                  label="Full Name"
                  type="text"
                  value={field.value}
                  onChangeInput={field.onChange}
                  onBlur={field.onBlur}
                  hasError={fieldState.error}
               
                />
              );
            }}
          />
           <div className={styles.error}>
              {errors?.userFullName && <p className={styles.erorText}>{errors?.userFullName?.message}</p>}
            </div>
          <Controller
            name="userEmail"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <Input
                  label="Email Adress"
                  type="email"
                  value={field.value}
                  onChangeInput={field.onChange}
                  onBlur={field.onBlur}
                  hasError={fieldState.error}
               
                />
              );
            }}
          />
          <div className={styles.error}>
              {errors?.userEmail && <p className={styles.erorText}>{errors?.userEmail?.message}</p>}
          </div>
          
          <Controller
            name="userPassword"
            control={control}
            rules={{ minLength: 8, required:"Это поле обязательно" }}
            render={({ field, fieldState }) => {
              return (
                <Input
                  label="Password"
                  type="password"
                  value={field.value}
                  onChangeInput={field.onChange}
                  onBlur={field.onBlur}
                  hasError={fieldState.error}
                
                />

              );
            }}
          />
          <div className={styles.error}>
              {errors?.userPassword && <p className={styles.erorText}>{errors?.userPassword?.message}</p>}
          </div>
           <Controller
            name="userConfirmPassword"
            control={control}
            rules={{ minLength: 8, required:"Это поле обязательно" }}
            render={({ field, fieldState }) => {
              return (
                <Input
                  label="Confirm Password"
                  type="password"
                  value={field.value}
                  onChangeInput={field.onChange}
                  onBlur={field.onBlur}
                  hasError={fieldState.error}
                
                />
              );
            }}
          />
          <div className={styles.error}>
              {errors?.userConfirmPassword && <p className={styles.erorText}>{errors?.userConfirmPassword?.message}</p>}
          </div>
          <div className={styles.rememberForgot}>
            <label>
              
                <input
                  type="checkbox"
                  name="remember-me"
                  className={styles.realCheckbox}
                />
                <span className={styles.customCheckbox}></span>
                I have read and agree to the 
                <a href="#">Terms of Service</a>
            
            </label>

            <Button value="Sign Up" disabled={!isValid}/>
          </div>
        </form>
      </div>

      <div className={styles.noAccount}>
        <p>Already have an account?</p>
        <Link to="/log-in">Log In</Link>
      </div>
    </div>
  );
}

export default SignUp;
