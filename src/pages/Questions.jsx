import React from 'react'
import '../styles/global.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import AnswerBox from '../components/AnswerBox';


const Questions = () => {
  return (
    <div className='q w-100  border border-dark flex_center'>
              <div className="home_box flex_col_around">
                    <div className="quizMesage">

                    </div>


                   <AnswerBox/>
                   <AnswerBox/>
                   <AnswerBox/>
                   <AnswerBox/>
                   
                    
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="primary">Prev</Button>
                        <Button variant="secondary">Next</Button>
                       
                    </ButtonGroup>
            </div>
    </div>
  )
}

export default Questions