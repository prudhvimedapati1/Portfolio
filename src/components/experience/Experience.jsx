import React from 'react'
import './experience.css'
import {IoMdArrowDropright} from 'react-icons/io'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What have I studied</h5>
      <h2>My Education</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>B.Tech</h3>
          </div>
          <ul className="service_list">
            <li><IoMdArrowDropright className='service__list-icon'/>
            <p>Indian Institute of Technology (ISM)</p></li>
            <li><IoMdArrowDropright className='service__list-icon'/>
            <p>Dhanbad, India</p></li>
            <li><IoMdArrowDropright className='service__list-icon'/>
            <p>2020-2024</p></li>
            <li><IoMdArrowDropright className='service__list-icon'/>
            <p>Electronics and Communication Engineering</p></li>
            <li><IoMdArrowDropright className='service__list-icon'/>
            <p>GPA - 7.86</p></li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Class XII</h3>
          </div>
          <ul className="service_list">
            <li><IoMdArrowDropright className='service__list-icon'/>
            <p>Sri Chaitanya junior college</p></li>
            <li><IoMdArrowDropright className='service__list-icon'/>
            <p>Vijayawada, India</p></li>
            <li><IoMdArrowDropright className='service__list-icon'/>
            <p>2018-2020</p></li>
            <li><IoMdArrowDropright className='service__list-icon'/>
            <p>Andhra Pradesh Board of Intermediate Education</p></li>
            <li><IoMdArrowDropright className='service__list-icon'/>
            <p>GPA - 9.41</p></li>
            <li><IoMdArrowDropright className='service__list-icon'/>
            <p>Maths, Physics and Chemistry</p></li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Class X</h3>
          </div>
          <ul className="service_list">
            <li><IoMdArrowDropright className='service__list-icon'/>
            <p>Sri Chaitanya Educational Institutions</p></li>
            <li><IoMdArrowDropright className='service__list-icon'/>
            <p>Rajamundry, India</p></li>
            <li><IoMdArrowDropright className='service__list-icon'/>
            <p>2017-2018</p></li>
            <li><IoMdArrowDropright className='service__list-icon'/>
            <p>Board of Secondary education Andhra Pradesh</p></li>
            <li><IoMdArrowDropright className='service__list-icon'/>
            <p>GPA - 10</p></li>
          </ul>
        </article>
      </div>
      
    </section>
  )
}

export default Experience