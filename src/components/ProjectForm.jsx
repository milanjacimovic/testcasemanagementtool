import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';

export default function ProjectForm({ filteredTestCases, setFilteredTestCases, showProjects, setShowProjects, name, id, selectedProject, setSelectedProject, handleDelete, handleUpdate, testCases, setTestCases }) {

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [originalName, setOriginalName] = useState(name);
  

  const handleEditClick = () => {
    setIsEditing(true);
    setOriginalName(name);
  }

  const handleSaveClick = () => {
    handleUpdate(id, newName);
    setIsEditing(false);
  }

  const handleCancelClick = () => {
    setNewName(originalName);
    setIsEditing(false);
  }

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNameClick = () => {
    if(isEditing) return;

    setShowProjects(false)
    setSelectedProject(name)    
    const filteredProjectsArray = testCases.filter(testCase => testCase.project === name)
    setFilteredTestCases(filteredProjectsArray)
    
  }

  return (
    <div className="flex flex-row justify-between p-5 border-4 border-primary-color">

      <div onClick={handleNameClick}>
        {isEditing ? (
          <input type='text' value={newName}
            onChange={handleInputChange} className='border-2 p-2 rounded' />
        ) : (
          <button className='bg-primary-color text-white p-3 rounded-full w-32'>{name}</button>
        )}
      </div>
      <div className="flex flex-row items-center justify-center gap-3">
        {!isEditing ? (
          <button onClick={handleEditClick}>
            <EditIcon sx={{ fontSize: 25, color: '#2f6cd0' }} />
          </button>
        ) :

          <button onClick={handleSaveClick} className="focus:outline-none
             text-white bg-green-700 hover:bg-green-800 focus:ring-4
              focus:ring-green-300 font-medium rounded-lg text-sm 
              px-3 py-2  dark:bg-green-600 dark:hover:bg-green-700
               dark:focus:ring-green-800">
            Save
          </button>
        }
        {isEditing &&
          <button onClick={handleCancelClick} className="focus:outline-none text-white
           bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
           font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 
           dark:hover:bg-red-700 dark:focus:ring-red-900">Cancel</button>}
        <button onClick={() => handleDelete(id)}>
          <DeleteIcon sx={{ fontSize: 25, color: '#b83a3c' }} />
        </button>
      </div>
    </div>
  )
}