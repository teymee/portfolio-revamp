import React from "react";
import "./project.css";

function Project({ img, name }) {
	return (
		<>
            
			<div className="project">

				<img src={img} alt={name} />
                        {/* <span className="project-name">{name}</span> */}
			</div>

			
		</>
	);
}

export default Project;
