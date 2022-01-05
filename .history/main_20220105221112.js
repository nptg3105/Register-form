const registerForm = document.querySelector("#register-form");
const form = (
  <div className="register">
    <h2 className="title">Register Account</h2>
    <form>
      <label className="label" for="email">
        Email
      </label>
      <br />
      <input
        placeholder="Enter your email"
        type="email"
        id="email"
        name="mail"
      />
      <br />
      <label className="label" for="password">
        Password
      </label>
      <br />
      <input
        placeholder="Enter your password"
        type="password"
        id="password"
        name="pass"
      />
      <br />
      <label className="label" for="password-confirm">
        Password Confirm
      </label>
      <br />
      <input
        placeholder="Enter your password confirm"
        type="password"
        id="password-confirm"
        name="pass-confirm"
      />
      <input type="submit" value="Register" className="btn" />
    </form>
  </div>
);
ReactDOM.render(form, registerForm);
