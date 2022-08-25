import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { Container, Button } from 'react-bootstrap';
import { query, collection, getDocs, where } from "firebase/firestore";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

function Profile() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);

  return (
    <Container fluid className="clip-container">
      <Container className="pb-5 pt-5" style={{overflowX: 'auto'}}>
        <p className="fs-2 text-white fw-bold">Личный кабинет</p>
        <div className="fs-4 text-white fw-bold title pb-2 text-wrap">Ваше имя: <span className="fs-5">{name}</span></div>
        <div className="fs-4 text-white fw-bold title pb-5 text-wrap">Ваша почта: <span className="fs-5">{user?.email}</span></div>
        <Table striped bordered hover>
    <thead className="text-white">
      <tr>
        <th>Номер опроса</th>
        <th>Кол-во вопросов</th>
        <th>Кол-во прошедших</th>
        <th>Создатель</th>
      </tr>
    </thead>
    <tbody className="text-white ">
      <tr>
        <td className="text-white">1</td>
        <td className="text-white">1</td>
        <td className="text-white">0</td>
        <td className="text-white">{name}</td>
      </tr>
      <tr>
        <td className="text-white">2</td>
        <td className="text-white">2</td>
        <td className="text-white">0</td>
        <td className="text-white">{name}</td>
      </tr>
      <tr>
        <td className="text-white">3</td>
        <td className="text-white">3</td>
        <td className="text-white">0</td>
        <td className="text-white">{name}</td>
      </tr>
    </tbody>
  </Table>
        <Button variant='danger' onClick={logout}>
          Выйти
        </Button>
        <p>
        <Button variant='warning' className='mt-3'>
        <Link to='/quest' className="text-white">Создать</Link>
        </Button>
        </p>
        <p className="text-white fw-bold pt-4">Количество доступных опросников: 5/5</p>
      </Container>
    </Container>
  );
}

export default Profile;
