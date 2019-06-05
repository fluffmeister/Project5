import React from 'react'

function ProjectDetails(props) {

    const id = props.match.params.id;

    return (
        <div className='container section propject-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Project title-{id}</span>
                    <p> lorem not working =( </p>
                </div>

                <div className='card-action grey lighten-4 grey-text'>
                        <div>Posted by Fluffmeister</div>
                        <div>11th of June, 3am</div>
                </div>        
            </div>
        </div>
    )
}

export default ProjectDetails
