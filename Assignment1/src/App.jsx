import { useState } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import { coursesData } from './data/coursesData';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [completedCourses, setCompletedCourses] = useState([]);

  const handleLogin = (user) => {
    setUsername(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setSelectedCourse(null);
    setCompletedCourses([]);
  };

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleBack = () => {
    setSelectedCourse(null);
  };

  const handleCompleteCourse = () => {
    if (selectedCourse && !completedCourses.includes(selectedCourse.id)) {
      setCompletedCourses([...completedCourses, selectedCourse.id]);
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <Header username={username} onLogout={handleLogout} />
      
      {selectedCourse ? (
        <CourseDetails 
          course={selectedCourse}
          onBack={handleBack}
          onComplete={handleCompleteCourse}
          isCompleted={completedCourses.includes(selectedCourse.id)}
        />
      ) : (
        <CourseList 
          courses={coursesData}
          onSelectCourse={handleSelectCourse}
          completedCourses={completedCourses}
        />
      )}
    </div>
  );
}

export default App;
