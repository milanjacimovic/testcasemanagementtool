import { useState } from "react";
import {v4 as uuid} from "uuid";

export default function AddNewProjectForm({projects, setProjects, showAddNewProjectForm: toggleAddNewProjectForm}) {
    const [inputValue, setInputValue] = useState("");

    function handleInputChange(e) {
        setInputValue(e.target.value)
    }


    function addProject() {
        if (inputValue.trim() !== "") {
            setProjects((projects) => [{name: inputValue, id:uuid()}, ...projects])
            toggleAddNewProjectForm()
        }
       
    }


    return (
        <div className="border-4 border-primary-color p-8">
            <h1 className="flex justify-center">Enter project's name</h1>
            <div className="Input">
                <input type="text" className="shadow-sm border-gray-300 rounded-lg m-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400" onChange={handleInputChange}/>
            </div>
            <div className="Buttons flex justify-evenly pt-4">
                <button onClick={addProject} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create</button>
                <button onClick={toggleAddNewProjectForm} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancel</button>
            </div>
        </div>
    )
}