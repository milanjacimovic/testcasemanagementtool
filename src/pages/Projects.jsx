import { useState, useEffect } from "react";
import ProjectList from "../components/ProjectList";
import TestCaseList from "../components/TestCaseList";

export default function Projects({
    selectedProject,
    setSelectedProject,
    projects,
    setProjects,
    testCase,
    setTestCase,
    testCases,
    setTestCases,
}) {
    const [showProjects, setShowProjects] = useState(true);
    const [filteredTestCases, setFilteredTestCases] = useState(testCases);

    // Filter test cases based on selected project
    useEffect(() => {
        if (selectedProject) {
            setFilteredTestCases(testCases.filter(testCase => testCase.project === selectedProject));
        } else {
            setFilteredTestCases(testCases);
        }
    }, [selectedProject, testCases]);

    const handleClickAllProjects = () => {
        setShowProjects(true);
        setFilteredTestCases(testCases);  // Reset filter to show all test cases
    };

    return (
        <div>
            {showProjects ? (
                <ProjectList
                    filteredTestCases={filteredTestCases}
                    setFilteredTestCases={setFilteredTestCases}
                    selectedProject={selectedProject}
                    setSelectedProject={setSelectedProject}
                    showProjects={showProjects}
                    setShowProjects={setShowProjects}
                    projects={projects}
                    setProjects={setProjects}
                    testCases={testCases}
                    setTestCases={setTestCases}
                />
            ) : (
                <div className="m-12">
                    <div className="flex justify-center">
                        <button
                            className="bg-primary-color text-white p-5 mb-3 rounded-full"
                            onClick={handleClickAllProjects}
                        >
                            Go back to all projects
                        </button>
                    </div>
                    <TestCaseList testCases={filteredTestCases} setTestCases={setTestCases} />
                </div>
            )}
        </div>
    );
}
