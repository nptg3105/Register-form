const registerForm = document.querySelector("#register-form");
const form = (
  <div className="register">
    <h2 className="title">Register Form</h2>
    <form>
      <label for="email">Email</label>
      <br />
      <input
        placeholder="Enter your email"
        type="email"
        id="email"
        name="mail"
      />
      <br />
      <label for="password">Password</label>
      <br />
      <input
        placeholder="Enter your password"
        type="password"
        id="password"
        name="pass"
      />
      <br />
      <label for="password-confirm">Password Confirm</label>
      <br />
      <input
        placeholder="Enter your password confirm"
        type="password"
        id="password-confirm"
        name="pass-confirm"
      />
      <button type="submit" form="" className="btn" value="Register">
        Register
      </button>
    </form>
  </div>
);
ReactDOM.render(form, registerForm);
