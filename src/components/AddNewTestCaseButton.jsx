import { useState } from "react";
import AddTestCase from "./AddTestCase"
export default function AddNewTestCaseButton({projects, testCase, setTestCase, testCases, setTestCases}) {

    const [addNewTestCaseVisibility, setAddNewTestCaseVisibility] = useState(false);
   
    function showAddNewTestCase() {
        setAddNewTestCaseVisibility(!addNewTestCaseVisibility);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <button onClick={showAddNewTestCase} className="bg-primary-color text-white p-5 mb-3 rounded-full">Add new test case</button>
            {addNewTestCaseVisibility && <AddTestCase showAddNewTestCase={showAddNewTestCase} projects={projects} testCase={testCase} setTestCase={setTestCase} testCases={testCases} setTestCases={setTestCases}/>}
        </div>
        
    )
}