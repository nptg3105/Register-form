const registerForm = document.querySelector("#register-form");
const form = (
  <div>
    <h3>Register Form</h3>
    <form>
      <label for="email">Email</label>
      <br />
      <input type="email" id="email" name="mail" />
      <br />
      <label for="password">Password</label>
      <br />
      <input type="password" id="password" name="pass" />
      <br />
      <label for="password-confirm">Password Confirm</label>
      <br />
      <input type="password" id="password-confirm" name="pass-confirm" />
    </form>
    <a href="#">Register</a>
  </div>
);
ReactDOM.render(form, registerForm);
