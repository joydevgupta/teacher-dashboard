import React from 'react';
import TeacherForm from './forms/TeacherForm'; // Adjust the path if necessary
import './App.css'; // If needed for styles

function App() {
  return (
    <div>
      <h1>Welcome to the Teacher Dashboard</h1>
      <p>
        This platform is designed to manage teacher and student details for our
        global English learning platform.
      </p>
      <TeacherForm /> {/* Render the TeacherForm component */}
    </div>
  );
}

export default App;
