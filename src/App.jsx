import './index.css';

import '@fortawesome/fontawesome-free/css/all.css';
import { useState } from 'react';
import { v4 as uuid } from "uuid";

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import TestCases from './pages/TestCases';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Navbar from './components/Navbar'


export default function App() {
  const [projects, setProjects] = useState([{ name: "EMP", id: 1 }, { name: "IRIS Portal", id: 2 }, { name: "Pixie", id: 3 }])
  const [selectedProject, setSelectedProject] = useState("")
  const [testCases, setTestCases] = useState([
    {
      project: "EMP",
      priority: "",
      type: "",
      title: "Test title",
      description: "Test description",
      steps: [{ step: "", result: "" }],
      createdAt: "",
      id: 1
    },
    {
      project: "EMP",
      priority: "",
      type: "",
      title: "Test title",
      description: "Test description",
      steps: [{ step: "", result: "" }],
      createdAt: "",
      id: 2
    },
    {
      project: "Pixie",
      priority: "",
      type: "",
      title: "Test title",
      description: "Test description",
      steps: [{ step: "", result: "" }],
      createdAt: "",
      id: 3
    }
  ]);
  const [testCase, setTestCase] = useState(
    {
      project: "",
      priority: "",
      type: "",
      title: "",
      description: "",
      steps: [{ step: "", result: "" }],
      createdAt: "",
      id: uuid()
    }
  );
  return (
    <div className='dark:bg-gray-900 min-h-screen'>
      <BrowserRouter basename='/testcasemanagementtool'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='projects' element={<Projects projects={projects} setProjects={setProjects} selectedProject={selectedProject} setSelectedProject={setSelectedProject} testCase={testCase} setTestCase={setTestCase} testCases={testCases} setTestCases={setTestCases} />}></Route>
          <Route path='testcases' element={<TestCases testCase={testCase} setTestCase={setTestCase} testCases={testCases} setTestCases={setTestCases} projects={projects} />}></Route>
          <Route path='users' element={<Users />}></Route>
          <Route path='settings' element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}
