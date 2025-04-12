import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    return (
        <div className=' flex justify-center h-[80vh] items-center text-3xl font-bold'>
            <h1 className=''>About</h1>
            <button onClick={()=>navigate('/contact')}>go to contact</button>
        </div>
    )
}

export default About