import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="register">
      <div className="register__container">
        <div className="form__group field">
        <input
          type="text"
          className="form__field"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <label for="name" class="form__label">Name</label>
        </div>
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
        <Button id='button' className='mt-5' variant='primary' onClick={register}>
          Зарегистрироваться
        </Button>
        <Button
        className='mt-5'
        variant='warning'
          onClick={signInWithGoogle}
        >
          Зарегистрироваться с помощью Google
        </Button>

        <div className="text-white mt-3">
          Уже есть аккаунт? <Link to="/login">Авторизируйся</Link> сейчас.
        </div>
      </div>
    </div>
  );
}

export default Register;
