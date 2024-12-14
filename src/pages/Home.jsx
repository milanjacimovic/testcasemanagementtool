import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="text-center p-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4">
          Welcome to TestHive
        </h1>
        <p className="text-lg mb-8">
          A powerful tool to manage your software testing lifecycle. Create, organize, and track test cases and projects with ease.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to="/projects"
            className="bg-blue-600 text-white py-3 px-6 rounded-full text-xl font-semibold hover:bg-blue-700 transition duration-200"
          >
            Get Started
          </Link>
          <Link
            to="/settings"
            className="text-blue-600 py-3 px-6 rounded-full text-xl font-semibold hover:bg-gray-700 hover:text-white transition duration-200"
          >
            Settings
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Key Features</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Manage Projects</h3>
              <p>Organize your projects efficiently and keep track of the progress with ease.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Create Test Cases</h3>
              <p>Create detailed test cases with steps, expected results, and more.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Track Progress</h3>
              <p>Monitor test results and identify bugs quickly with comprehensive reports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-800 text-center text-white">
        <p>© 2024 TestCase Manager. All rights reserved.</p>
      </footer>
    </div>
  );
}
