import { useState } from "react";
import AddNewProjectForm from "./AddNewProjectForm"
export default function AddNewProjectButton({projects, setProjects}) {

    const [addNewProjectVisibility, setAddNewProjectVisibility] = useState(false);
   
    function showAddNewProjectForm() {
        setAddNewProjectVisibility(!addNewProjectVisibility);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <button onClick={showAddNewProjectForm} className="bg-primary-color text-white p-5 mb-3 rounded-full">Add new project</button>
            {addNewProjectVisibility && <AddNewProjectForm showAddNewProjectForm={showAddNewProjectForm} projects={projects} setProjects={setProjects}/>}
        </div>
        
    )
}