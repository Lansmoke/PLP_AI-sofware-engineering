import './Header.css';

function Header({ username, onLogout }) {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1>📚 E-Learning Platform</h1>
        <div className="user-section">
          <span className="welcome">Welcome, {username}!</span>
          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
