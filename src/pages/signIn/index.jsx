import React from "react";
import styles from "./styles.module.scss";
import googleLogo from "../../assets/icons/Google__G__Logo 1.svg";
import logo from "../../assets/icons/Logo.svg";
import Input from "../../components/input";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
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
            rules={{ minLength: 3 }}
            render={({ field, fieldState }) => {
              return (
                <Input
                  label="Full Name"
                  type="text"
                  value={field.value}
                  onChangeInput={field.onChange}
                  onBlur={field.onBlur}
                  hasError={fieldState.error}
                  {...register('userFullName', {
                    required: "Это поле обязательно!"
                  })}
                />
              );
            }}
          />
           <div className={styles.error}>
              {errors?.userFullName && <p className={styles.erorText}>{errors?.userFullName?.message || "Error!"}</p>}
            </div>
          <Controller
            name="userEmail"
            control={control}
            rules={{ minLength: 5 }}
            render={({ field, fieldState }) => {
              return (
                <Input
                  label="Email Adress"
                  type="email"
                  value={field.value}
                  onChangeInput={field.onChange}
                  onBlur={field.onBlur}
                  hasError={fieldState.error}
                  {...register('userEmail', {
                    required: "Это поле обязательно!"
                  })}
                />
              );
            }}
          />
          <div className={styles.error}>
              {errors?.userEmail && <p className={styles.erorText}>{errors?.userEmail?.message || "Error!"}</p>}
          </div>
          
          <Controller
            name="userPassword"
            control={control}
            rules={{ minLength: 8 }}
            render={({ field, fieldState }) => {
              return (
                <Input
                  label="Password"
                  type="password"
                  value={field.value}
                  onChangeInput={field.onChange}
                  onBlur={field.onBlur}
                  hasError={fieldState.error}
                  {...register('userPassword', {
                    required: "Это поле обязательно!"
                  })}
                />

              );
            }}
          />
          <div className={styles.error}>
              {errors?.userPassword && <p className={styles.erorText}>{errors?.userPassword?.message || "Error!"}</p>}
          </div>
           <Controller
            name="userConfirmPassword"
            control={control}
            rules={{ minLength: 8 }}
            render={({ field, fieldState }) => {
              return (
                <Input
                  label="Confirm Password"
                  type="password"
                  value={field.value}
                  onChangeInput={field.onChange}
                  onBlur={field.onBlur}
                  hasError={fieldState.error}
                  {...register('userConfirmPassword', {
                    required: "Это поле обязательно!"
                  })}
                />
              );
            }}
          />
          <div className={styles.error}>
              {errors?.userConfirmPassword && <p className={styles.erorText}>{errors?.userConfirmPassword?.message || "Error!"}</p>}
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

            <Button value="Sign Up" disabled={!isDirty || !isValid}/>
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
