import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    setPassword,
    password,
    emailError,
    passwordError,
    handleSignIn,
    handleSignOut,
    handleSignUp,
    hasAccount,
    setHasAccount,
    clearErrors,
    clearInputs,
  } = props;

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(evt) => {
            setPassword(evt.target.value);
          }}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleSignIn}>Sign In</button>
              <p>
                Don't have an account?
                <span
                  onClick={() => {
                    clearErrors();
                    clearInputs();
                    setHasAccount(!hasAccount);
                  }}
                >
                  Sign Up
                </span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>Sign Up</button>
              <p>
                Already has an account?
                <span
                  onClick={() => {
                    clearErrors();
                    clearInputs();
                    setHasAccount(!hasAccount);
                  }}
                >
                  Sign In
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
