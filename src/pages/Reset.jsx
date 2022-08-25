import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";
import { Button } from 'react-bootstrap';

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="reset">
      <div className="reset__container">
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
        <Button className='mt-5'
          variant='primary' onClick={() => sendPasswordReset(email)}>
          Восстановить пароль
        </Button>

        <div className="text-white mt-5">
          Нету аккаунта? <Link to="/register">Зарегистрируйся</Link> сейчас.
        </div>
      </div>
    </div>
  );
}

export default Reset;
