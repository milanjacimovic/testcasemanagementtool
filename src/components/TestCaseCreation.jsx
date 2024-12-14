import AddNewTestCaseButton from "./AddNewTestCaseButton";

export default function TestCaseCreation({ projects, testCase, setTestCase, testCases, setTestCases }) {
  return (
    <div className="flex justify-center w-full px-4 sm:px-8">
      <div className="w-full sm:w-3/5">
        <div className="flex justify-center pt-12">
          <AddNewTestCaseButton
            projects={projects}
            testCase={testCase}
            setTestCase={setTestCase}
            testCases={testCases}
            setTestCases={setTestCases}
          />
        </div>
      </div>
    </div>
  );
}
