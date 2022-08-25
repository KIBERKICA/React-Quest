import React, { useState, useEffect } from 'react'
import { Alert, Form, Container, Button } from 'react-bootstrap';
export const Quest = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  const [arr, setArr] = useState([]);
  const [value, setValue] = useState('');
   
   const result = arr.map((element, index) => {
      return <p key={index}>{element}</p>;
   });

   function add() {
      setArr([...arr, value]);
   }

   function inputValue(event) {
      setValue(event.target.value);
   }
   const [showElement, setShowElement] = React.useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    });
  }, []);
  return (
    <>
      <Container fluid className="clip-container">
        <Container className="pb-5 pt-5">
          <p className="fs-2 fw-bold text-white text-center">Создайте свой опросник</p>
          <Form>
            <Form.Group className="mb-5 text-white" controlId="exampleForm.ControlInput1">
              <Form.Label className='text-white'>Название опроса</Form.Label>
              <Form.Control type="text" placeholder="Тест на знание FrontEnd" />
            </Form.Group>
            <div className='d-flex text-white title fs-5 fw-bold'>
              <span>Вопросов {counter} - </span>
              <p className='px-2'>{result}</p>
            </div>
            <Form.Group className="mb-5 mt-5 text-white" controlId="exampleForm.ControlInput1">
              <Form.Label className='text-white'>Название вопроса</Form.Label>
              <Form.Control type="text" placeholder="Что такое HTML?" onChange={inputValue} />
              <Button className='mt-5' variant='primary' onClick={(event) => { add(); handleClick();}}>
                Добавить
              </Button>
            </Form.Group>
          </Form>
          <Button className='mt-2' variant='primary' onClick={setShowElement}>
                Опубликовать
              </Button>
          {showElement ? (
              <Alert className='h-25 w-50 mt-4' variant='warning'>
                  <span className='text-black fw-bold'>Помощник:</span> Я бы создал, но у меня нету еще скрипта, ожидайте обновления.
              </Alert>
        ) : (
          <div></div>
        )}{" "}
        </Container>
      </Container>
    </>
  )
}

export default Quest;
