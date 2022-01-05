const registerForm = document.querySelector("#register-form");
const form = (
  <>
    <h2>Register Form</h2>
    <form>
      <label for="email">Email</label>
      <br />
      <input type="email" id="email" name="mail" />
      <label for="password">Password</label>
      <br />
      <input type="password" id="password" name="pass" />
      <label for="password-confirm">Password Confirm</label>
      <br />
      <input type="password" id="password-confirm" name="pass-confirm" />
    </form>
  </>
);
ReactDOM.render(form, registerForm);
