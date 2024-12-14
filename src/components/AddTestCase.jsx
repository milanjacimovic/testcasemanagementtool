import { useEffect, useState } from "react";

export default function AddTestCase({ showAddNewTestCase, projects, testCase, setTestCase, testCases, setTestCases }) {
  const [localTestCase, setLocalTestCase] = useState(testCase);

  useEffect(() => {
    setLocalTestCase(testCase);
  }, [testCase]);

  function handleChange(e) {
    const { name, value } = e.target;
    setLocalTestCase((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (localTestCase.title !== "" && localTestCase.description !== "" && localTestCase.project !== "") {
      const newTestCase = { ...localTestCase };
      setTestCases((prevTestCases) => [...prevTestCases, newTestCase]);

      setTestCase({
        project: "",
        priority: "",
        type: "",
        title: "",
        description: "",
        steps: [{ step: "", result: "" }],
        createdAt: "",
      });
      showAddNewTestCase();
    }
  }

  return (
    <form className="flex flex-col bg-white dark:bg-gray-900 p-6 border hover:shadow-lg hover:border-blue-500 transition duration-300 dark:border-gray-700 rounded-lg shadow-md" onSubmit={handleSubmit}>
      {/* Project, Priority, Type Row */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 m-3">
        <div className="selectProject flex flex-col w-full sm:w-1/3">
          <label className="dark:text-white">Project</label>
          <select
            name="project"
            value={localTestCase.project}
            onChange={handleChange}
            className="mt-1 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
          >
            <option value="">Select a Project</option>
            {projects.map((project) => (
              <option key={project.id} value={project.name}>
                {project.name}
              </option>
            ))}
          </select>
        </div>

        <div className="selectPriority flex flex-col w-full sm:w-1/3">
          <label className="dark:text-white">Priority</label>
          <select
            name="priority"
            value={localTestCase.priority}
            onChange={handleChange}
            className="mt-1 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="selectType flex flex-col w-full sm:w-1/3">
          <label className="dark:text-white">Type</label>
          <select
            name="type"
            value={localTestCase.type}
            onChange={handleChange}
            className="mt-1 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
          >
            <option value="manual">Manual</option>
            <option value="automation">Automation</option>
          </select>
        </div>
      </div>

      {/* Title Input */}
      <div className="enterTitle m-3">
        <input
          onChange={handleChange}
          value={localTestCase.title}
          name="title"
          className="w-full mt-2 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
          type="text"
          placeholder="Test Case Title"
        />
      </div>

      {/* Description Input */}
      <div className="enterDescription m-3">
        <textarea
          onChange={handleChange}
          value={localTestCase.description}
          name="description"
          className="w-full mt-2 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
          placeholder="Test Case Description"
        ></textarea>
      </div>

      {/* Test Steps Section */}
      <div className="testSteps flex flex-col sm:flex-row justify-between m-3 gap-3">
        <textarea
          onChange={handleChange}
          name="step"
          placeholder="Step description"
          className="w-full sm:flex-[4] p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
        ></textarea>
        <textarea
          onChange={handleChange}
          name="result"
          placeholder="Expected result"
          className="w-full sm:flex-[4] p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
        ></textarea>
        <div className="flex flex-col sm:flex-[1] items-center gap-2">
          {/* Smaller + and - buttons with more space between them */}
          <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-2 py-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            +
          </button>
          <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-2 py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            -
          </button>
        </div>
      </div>

      {/* Submit and Cancel Buttons */}
      <div className="buttons flex flex-row justify-center gap-5">
        <button
          type="submit"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Create
        </button>
        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Cancel
        </button>
      </div>
    </form>
  );
}
