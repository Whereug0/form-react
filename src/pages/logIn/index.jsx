import React from "react";
import styles from "./styles.module.scss";
import googleLogo from "../../assets/icons/Google__G__Logo 1.svg";
import logo from "../../assets/icons/Logo.svg";
import Input from "../../components/input";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

function LogIn() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log("data", data)
    reset();
  };

  return (
    <div className={styles.cardLognIn}>
      <div className={styles.box}>
        <div className={styles.logoWrap}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.LogInHeadline}>
          <h2>Log in to your Account</h2>
          <p>Welcome back, please enter your details.</p>
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
                  {...register("userEmail", {
                    required: "Это поле обязательно!",
                  })}
                />
              );
            }}
          />
          <div className={styles.error}>
            {errors?.userEmail && (
              <p className={styles.erorText}>
                {errors?.userEmail?.message || "Error!"}
              </p>
            )}
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
                  {...register("userPassword", {
                    required: "Это поле обязательно!",
                  })}
                />
              );
            }}
          />
          <div className={styles.error}>
            {errors?.userPassword && (
              <p className={styles.erorText}>
                {errors?.userPassword?.message || "Error!"}
              </p>
            )}
          </div>
          <div className={styles.rememberForgot}>
            <label>
              <input
                type="checkbox"
                name="remember-me"
                className={styles.realCheckbox}
              />
              <span className={styles.customCheckbox}></span>
              Remember Me
              <a href="#">Forgot Password?</a>
            </label>

            <Button value="Log In" disabled={!isDirty || !isValid} />
          </div>
        </form>
      </div>

      <div className={styles.noAccount}>
        <p>Don’t have an account?</p>
        <Link to="/sign-in"> Sign In</Link>
      </div>
    </div>
  );
}

export default LogIn;
