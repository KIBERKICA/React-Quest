import React, { Component } from 'react'
import { Container, Button} from 'react-bootstrap';

export default class Faq extends Component {
  render() {
    return (
      <>
      <Container className='pt-5 pb-5 mb-5'>
      <section className='d-flex align-items-center flex-column'>
    <h3 className="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
    <p className="text-center mb-5">
      Найдите ответы на ваши вопросы
    </p>
  
    <div className="row">
      <div className="col-md-6 col-lg-4 mb-4 col-col">
        <h6 className="mb-3 text-primary"><i className="far fa-paper-plane text-primary pe-2"></i>Какой то вопрос?</h6>
        <p>
          Qui reprehenderit labore eu minim pariatur.
        </p>
      </div>
  
      <div className="col-md-6 col-lg-4 mb-4 col-col">
        <h6 className="mb-3 text-primary"><i className="fas fa-pen-alt text-primary pe-2"></i>Какой то вопрос?</h6>
        <p>
          Aliqua incididunt sint nostrud tempor laborum officia.
        </p>
      </div>
  
      <div className="col-md-6 col-lg-4 mb-4 col-col">
        <h6 className="mb-3 text-primary"><i className="fas fa-user text-primary pe-2"></i>Какой то вопрос?
        </h6>
        <p>
          Ad laborum pariatur ad nostrud.
        </p>
      </div>
  
      <div className="col-md-6 col-lg-4 mb-4 col-col">
        <h6 className="mb-3 text-primary"><i className="fas fa-rocket text-primary pe-2"></i>Какой то вопрос?
        </h6>
        <p>
          Fugiat excepteur do ullamco minim id anim enim labore commodo et non in.
        </p>
      </div>
  
      <div className="col-md-6 col-lg-4 mb-4 col-col">
        <h6 className="mb-3 text-primary"><i className="fas fa-home text-primary pe-2"></i>Какой то вопрос?
        </h6>
        <p>Irure elit id ullamco velit eu pariatur pariatur et cupidatat incididunt.</p>
      </div>
  
      <div className="col-md-6 col-lg-4 mb-4 col-col">
        <h6 className="mb-3 text-primary"><i className="fas fa-book-open text-primary pe-2"></i>Какой то вопрос?</h6>
        <p>
          Velit adipisicing ex do officia.
        </p>
      </div>
    </div>
    <p className="fs-4 text-primary fw-bold text-center">Не нашел ответ на свой вопрос?</p>
    <Button variant="outline-warning">Задать свой вопрос</Button>{' '}
  </section>
      </Container>
      </>
    )
  }
}