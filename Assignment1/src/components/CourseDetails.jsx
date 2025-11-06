import './CourseDetails.css';

function CourseDetails({ course, onBack, onComplete, isCompleted }) {
  return (
    <div className="course-details">
      <button className="back-btn" onClick={onBack}>
        ← Back to Courses
      </button>
      
      <div className="details-container">
        <div className="details-header">
          <div className="header-image">
            <img src={course.image} alt={course.title} />
          </div>
          <div className="header-info">
            <h1>{course.title}</h1>
            <p className="instructor">Instructor: {course.instructor}</p>
            <div className="course-stats">
              <span className="stat">
                <strong>Duration:</strong> {course.duration}
              </span>
              <span className="stat">
                <strong>Level:</strong> {course.level}
              </span>
              <span className="stat">
                <strong>Students:</strong> {course.students}
              </span>
            </div>
            <button 
              className={`complete-btn ${isCompleted ? 'completed' : ''}`}
              onClick={onComplete}
              disabled={isCompleted}
            >
              {isCompleted ? '✓ Completed' : 'Mark as Complete'}
            </button>
          </div>
        </div>

        <div className="details-content">
          <section className="section">
            <h2>About this course</h2>
            <p>{course.description}</p>
          </section>

          <section className="section">
            <h2>What you'll learn</h2>
            <ul className="learning-outcomes">
              {course.learningOutcomes.map((outcome, index) => (
                <li key={index}>✓ {outcome}</li>
              ))}
            </ul>
          </section>

          <section className="section">
            <h2>Course Content</h2>
            <div className="modules">
              {course.modules.map((module, index) => (
                <div key={index} className="module">
                  <h3>Module {index + 1}: {module.title}</h3>
                  <ul>
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex}>{lesson}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
