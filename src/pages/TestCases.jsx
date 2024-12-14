import { useState } from "react";
import TestCaseCreation from "../components/TestCaseCreation";
import TestCaseList from "../components/TestCaseList";

export default function TestCase({ testCase, setTestCase, testCases, setTestCases, projects }) {
  return (
    <div className="flex flex-col sm:flex-row gap-5 p-4">
      {/* TestCaseCreation Component */}
      <div className="flex flex-col sm:flex-[2] w-full sm:w-1/2">
        <TestCaseCreation
          projects={projects}
          testCase={testCase}
          setTestCase={setTestCase}
          testCases={testCases}
          setTestCases={setTestCases}
        />
      </div>

      {/* TestCaseList Component */}
      <div className="flex flex-col sm:flex-[2] w-full sm:w-1/2">
        <TestCaseList
          testCase={testCase}
          setTestCase={setTestCase}
          testCases={testCases}
          setTestCases={setTestCases}
        />
      </div>
    </div>
  );
}
