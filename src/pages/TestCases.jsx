import { useState } from "react";
import TestCaseCreation from "../components/TestCaseCreation";
import TestCaseList from "../components/TestCaseList";


export default function TestCase({testCase, setTestCase, testCases, setTestCases, projects}) {
    
   



    return (
        <div className="flex flex-row gap-5">
            <div className="flex flex-[2]">
                <TestCaseCreation projects={projects} testCase={testCase} setTestCase={setTestCase} testCases={testCases} setTestCases={setTestCases} />
            </div>
            <div className="flex flex-[2]">
                <TestCaseList testCase={testCase} setTestCase={setTestCase} testCases={testCases} setTestCases={setTestCases}/>
            </div>

        </div>

    )
}