import React  from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className= 'card z-depth-0 project-summary'>
            <div className='card-content grety-text text-darken-3'>
                <span className="card-title">{project.title}</span>
                <p>Posted by the Fluffmeister</p>
                <p className='grey-text'>12th June, 3am</p>           
            </div>
         </div>
    )
}

export default ProjectSummary;