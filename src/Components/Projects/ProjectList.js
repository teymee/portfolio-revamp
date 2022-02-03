import React from 'react';
import Project from './Project';
import './project.css'
import Budgetee from  './../../assets/budgetee.png'
import Ronaldo from  './../../assets/ronaldo.png'
import Cinema from  './../../assets/teymee-cinema.png'


function ProjectList() {
  return (
  <div className='project-list'>
        <div className='feat'>
              <div>
                    <h3>FEATURED PROJECTS</h3>
                    <span>Lorem sidhjks sodiowe apsos </span>
              </div>
          <button>VIEW ALL</button>
        </div>
        <Project img={Budgetee} name="Budgetee"/>
        <Project img={Ronaldo} name="Ronaldo Portfolio"/>
        <Project img={Cinema} name="Teymee Cinema"/>
        <Project img={Budgetee} name="Budgetee"/>
  </div>
  
  );
}

export default ProjectList;
