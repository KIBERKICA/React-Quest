import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {
    MDBFooter,
    MDBContainer,
    MDBBtn
  } from 'mdb-react-ui-kit';

  export default class Footer extends Component {
  render() {
    return (
      <div>
          <MDBFooter className='text-center text-white' style={{ backgroundColor: '#0a4275' }}>
        <MDBContainer className='p-4 pb-0'>
          <section className=''>
            <p className='d-flex justify-content-center align-items-center'>
              <span className='me-3'>Register for free</span>
              <MDBBtn type='button' outline color="light" rounded>
                <Link to='/login'>Sign up!</Link>
              </MDBBtn>
            </p>
          </section>
        </MDBContainer>
  
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; 2022 Copyright
          <a className=' px-2' href='https://vk.com/kirillwxmx'>
            KIRILLWXMX
          </a>
        </div>
      </MDBFooter>
      </div>
    )
  }
}