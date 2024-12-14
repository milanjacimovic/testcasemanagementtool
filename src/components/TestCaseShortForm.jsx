import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import useTestCaseStore from './useTestCaseStore'; // Import the Zustand store

export default function TestCaseShortForm({ handleDeleteTestCase, title, description, project, id }) {
  // Retrieve localTestCase and the setter function from Zustand store
  const { localTestCase, setLocalTestCase } = useTestCaseStore();

  // State to control whether the form is in editing mode
  const [isEditingTestCase, setIsEditingTestCase] = useState(false);

  // This function is triggered when you click the edit button
  const handleEdit = () => {
    setIsEditingTestCase(true);
    // Populate the form with the current test case data
    setLocalTestCase({ title, description, project });
  };

  // This function will be used to save changes made to the test case
  const handleSave = () => {
    // Perform any save actions here (e.g., call an API to save the data)
    setIsEditingTestCase(false);
    // Optionally, reset the localTestCase state after saving
  };

  return (
    <div className="testCaseShortForm flex flex-row w-full">
      <div className="flex flex-col w-full mt-5 p-4 bg-white dark:bg-gray-800 border rounded-lg shadow-sm hover:shadow-lg hover:border-blue-500 transition duration-300 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 mt-2 text-sm dark:text-gray-300">
          {description.length > 30 ? description.slice(0, 100) + '...' : description}
        </p>
        <p className="text-gray-600 mt-2 text-sm dark:text-gray-300">Project: {project}</p>

        <div className="flex flex-row items-center justify-center gap-3 mt-3">
          {/* Edit Button */}
          <button
            className="focus:outline-none text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
            onClick={handleEdit}
          >
            <EditIcon sx={{ fontSize: 25, color: '#2f6cd0' }} />
          </button>

          {/* Delete Button */}
          <button
            onClick={() => handleDeleteTestCase(id)}
            className="focus:outline-none text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-500"
          >
            <DeleteIcon sx={{ fontSize: 25, color: '#b83a3c' }} />
          </button>
        </div>
      </div>

      {isEditingTestCase && (
        <form className="flex flex-col bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md" onSubmit={handleSave}>
          {/* Project */}
          <div className="selectProject flex flex-col">
            <label className="dark:text-white">Project</label>
            <input
              name="project"
              value={localTestCase.project}
              onChange={(e) => setLocalTestCase({ project: e.target.value })}
              className="mt-1 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          {/* Priority */}
          <div className="selectPriority flex flex-col">
            <label className="dark:text-white">Priority</label>
            <select
              name="priority"
              value={localTestCase.priority}
              onChange={(e) => setLocalTestCase({ priority: e.target.value })}
              className="mt-1 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Type */}
          <div className="selectType flex flex-col">
            <label className="dark:text-white">Type</label>
            <select
              name="type"
              value={localTestCase.type}
              onChange={(e) => setLocalTestCase({ type: e.target.value })}
              className="mt-1 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
            >
              <option value="manual">Manual</option>
              <option value="automation">Automation</option>
            </select>
          </div>

          {/* Title */}
          <div className="enterTitle m-3">
            <input
              onChange={(e) => setLocalTestCase({ title: e.target.value })}
              value={localTestCase.title}
              name="title"
              className="w-full mt-2 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
              type="text"
              placeholder="Test Case Title"
            />
          </div>

          {/* Description */}
          <div className="enterDescription m-3">
            <textarea
              onChange={(e) => setLocalTestCase({ description: e.target.value })}
              value={localTestCase.description}
              name="description"
              className="w-full mt-2 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Test Case Description"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="buttons flex flex-row justify-center gap-5">
            <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Save
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => setIsEditingTestCase(false)} // Cancel Edit
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
