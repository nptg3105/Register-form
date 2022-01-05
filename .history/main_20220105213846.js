const registerForm = document.querySelector("#register-form");
const form = (
  <>
    <h2>Register Form</h2>
    <form>
      <label for="email">Email</label>
      <br />
      <input type="email" id="email" name="email" />
    </form>
  </>
);
ReactDOM.render(form, registerForm);
