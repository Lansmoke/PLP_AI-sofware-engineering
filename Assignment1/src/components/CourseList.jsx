import './CourseList.css';

function CourseList({ courses, onSelectCourse, completedCourses }) {
  return (
    <div className="course-list">
      <h2>Available Courses</h2>
      <div className="courses-grid">
        {courses.map(course => (
          <div 
            key={course.id} 
            className={`course-card ${completedCourses.includes(course.id) ? 'completed' : ''}`}
            onClick={() => onSelectCourse(course)}
          >
            <div className="course-image">
              <img src={course.image} alt={course.title} />
              {completedCourses.includes(course.id) && (
                <div className="completed-badge">✓ Completed</div>
              )}
            </div>
            <div className="course-info">
              <h3>{course.title}</h3>
              <p className="course-instructor">By {course.instructor}</p>
              <p className="course-description">{course.shortDescription}</p>
              <div className="course-meta">
                <span className="duration">⏱ {course.duration}</span>
                <span className="level">{course.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
