import React, { Component } from 'react'
import '../Style.scss'
import { Container, Button, Col, Row, ListGroup } from 'react-bootstrap';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ChairIcon from '@mui/icons-material/Chair';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TopicIcon from '@mui/icons-material/Topic';
import DnsIcon from '@mui/icons-material/Dns';

export default class Home extends Component {
    render() {
        return (
            <>
                <Container fluid className='clip-container'>
                    <Container className='d-flex justify-content-center align-items-center flex-column text-center'>
                        <p className="fs-2 fw-bold text-white pt-5 title">Хочешь уникальный опросник<span>?</span></p>
                        <Container className='pb-5'>
                            <Button variant="outline-danger" className='mt-4 ms-4'>Подробнее</Button>{' '}
                            <Button variant="outline-warning" className='mt-4 mx-4'>Начать</Button>{' '}
                        </Container>
                    </Container>
                </Container>
                <Container fluid className='clip-container'>
                    <Container className='container pt-5'>
                        <Row>
                            <Col>
                                <div className="steps">
                                    <div className="step"><CheckCircleOutlineIcon className='text-success'/><span>Зайди</span></div>
                                    <div className="step"><CheckCircleOutlineIcon className='text-success'/><span>Зарегистрируйся</span></div>
                                    <div className="step"><CheckCircleOutlineIcon className='text-success'/><span>Создай опросник</span></div>
                                    <div className="step"><CheckCircleOutlineIcon className='text-success'/><span>Скопируй ссылку</span></div>
                                    <div className="step"><CheckCircleOutlineIcon className='text-success'/><span>Отправь ссылку друзьям</span></div>
                                </div>
                            </Col>
                            <Col>
                                <p className="fs-3 text-white fw-bold title">Правда легко<span>?</span></p>
                                <p className="fs-3 text-white fw-bold title">Попробуй сам<span>!</span></p>
                                <Button variant="warning" className='mt-4'>Попробовать</Button>{' '}
                            </Col>
                        </Row>
                    </Container>
                </Container>
        
                <Container fluid className='clip-container pb-5'>
                    <Container className='container pt-5 d-flex align-items-center flex-column'>
                        <p className="fs-1 text-white fw-bold title text-center">Наши преимущества<span>?</span></p>
                        <Row>
                            <Col className='col-row mt-3'>
                                <ChairIcon className='icon text-success'/>
                                <p className="fs-5 fw-bold text-white text-center">Комфортабельность</p>
                                <p className="fs-6 fw-bold text-white text-center">У нас удобный, понятный дизайн.</p>
                            </Col>
                            <Col className='col-row mt-3 mx-2'>
                                <AttachMoneyIcon className='icon text-success'/>
                                <p className="fs-5 fw-bold text-white text-center">Цены</p>
                                <p className="fs-6 fw-bold text-white text-center">Каждый день мы боремся за самые лучшие цены в этой сфере.</p>
                            </Col>
                            <Col className='col-row mt-3 mx-2'>
                                <TopicIcon className='icon text-success'/>
                                <p className="fs-5 fw-bold text-white text-center">Темы</p>
                                <p className="fs-6 fw-bold text-white text-center">У нас имеется множество тем для оформления своего опросника.</p>
                            </Col>
                            <Col className='col-row mt-3 mx-2'>
                                <DnsIcon className='icon text-success'/>
                                <p className="fs-5 fw-bold text-white text-center">Удобное распространение</p>
                                <p className="fs-6 fw-bold text-white text-center">Берешь, копируешь и отправляешь.</p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
        
                <Container fluid className='clip-container pb-5'>
                    <Container className='container pt-5 d-flex align-items-center flex-column'>
                        <p className="fs-1 text-white fw-bold title text-center">Наши цены<span>!</span></p>
                        <Row>
                            <Col className='col-row mt-3'>
                                <p className='fs-3 text-white fw-bold text-center'>Lite Pack</p>
                                <ListGroup>
                                    <ListGroup.Item><CheckCircleOutlineIcon className='text-success'/><span className='px-3'>Возможность создавать до 10-ти опросников</span></ListGroup.Item>
                                </ListGroup>
                                <p className="fs-5 text-white fw-bold text-center title pt-3">100 <span>₽</span></p>
                                <Button variant="outline-warning" className='mt-4 mx-4'>Купить</Button>{' '}
                            </Col>
                            <Col className='col-row mt-3 mx-2'>
                                <p className='fs-3 text-white fw-bold text-center'>Medium Pack</p>
                                <ListGroup>
                                    <ListGroup.Item><CheckCircleOutlineIcon className='text-success'/><span className='px-3'>Возможность создавать до 15-ти опросников</span></ListGroup.Item>
                                </ListGroup>
                                <p className="fs-5 text-white fw-bold text-center title pt-3">200 <span>₽</span></p>
                                <Button variant="outline-warning" className='mt-4 mx-4'>Купить</Button>{' '}
                            </Col>
                            <Col className='col-row mt-3 mx-2'>
                                <p className='fs-3 text-white fw-bold text-center'>Full Pack</p>
                                <ListGroup>
                                    <ListGroup.Item><CheckCircleOutlineIcon className='text-success'/><span className='px-3'>Возможность создавать до 20-ти опросников</span></ListGroup.Item>
                                </ListGroup>
                                <p className="fs-5 text-white fw-bold text-center title pt-3">300 <span>₽</span></p>
                                <Button variant="outline-warning" className='mt-4 mx-4'>Купить</Button>{' '}
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </>
          )
    }
}