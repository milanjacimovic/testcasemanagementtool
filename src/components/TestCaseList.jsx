import TestCaseShortForm from "./TestCaseShortForm"
export default function TestCaseList({setFilteredTestCases, testCase, setTestCase, testCases, setTestCases}) {
    const handleDeleteTestCase = (id) => {    
        setTestCases((prevTestCases) => prevTestCases.filter(testCase => testCase.id !== id));
        
    } 

    return(
        <div className="mt-5 mb-5 w-full mr-10">
            {testCases.map(testCase => {
                return <TestCaseShortForm handleDeleteTestCase={handleDeleteTestCase} key={testCase.id} id={testCase.id} title={testCase.title} description={testCase.description} project={testCase.project}/>
            })}
        </div>
    )
}