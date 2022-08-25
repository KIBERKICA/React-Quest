import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from 'react-bootstrap';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="login">
      <div className="login__container">
        <div className="form__group field">
        <input
          type="text"
          className="form__field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <label for="name" class="form__label">E-Mail</label>
        </div>
        <div className="form__group field">
        <input
          type="password"
          className="form__field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <label for="name" class="form__label">Password</label>
        </div>
        <Button
          className='mt-5'
          variant='primary'
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Войти
        </Button>
        <Button className='mt-5' variant='warning' onClick={signInWithGoogle}>
          Войти с помощью Google
        </Button>
        <div className="mt-3">
          <Link className='text-white' to="/reset">Восстановить пароль</Link>
        </div>
        <div className="text-white mt-5">
          Нету аккаунта? <Link to="/register">Зарегистрируйся</Link> сейчас.
        </div>
      </div>
    </div>
  );
}

export default Login;
