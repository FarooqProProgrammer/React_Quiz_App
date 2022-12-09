import React from 'react'
import '../styles/global.css'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className='Home flex_center' >

            <div className="home_box flex_col_around">
                    <div className="quizMesage">

                    </div>
                    <Button variant="outline-primary">
                        <Link to="/Questions" className='text-decoration-none'>Get Started to Quiz</Link>                        
                    </Button>
            </div>

    </div>
  )
}

export default Home