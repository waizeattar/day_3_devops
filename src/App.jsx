import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-box">D</div>
          <span>DevDeploy</span>
        </div>

        <div className="nav-right">
          <span className="online">
            <span className="online-dot"></span>
            All Systems Operational
          </span>

          <div className="profile">W</div>
        </div>
      </nav>

      {/* Main */}
      <main className="container">

        {/* Hero */}
        <section className="hero">

          <div>
            <span className="tag">AWS EC2 • PRODUCTION</span>

            <h1>
              Welcome to your
              <br />
              <span>DevOps Dashboard.</span>
            </h1>

            <p>
              Your React application is successfully running
              on an AWS EC2 instance.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                🚀 Deploy App
              </button>

              <button className="secondary-btn">
                View Logs
              </button>
            </div>
          </div>

          <div className="server-visual">

            <div className="server-card">

              <div className="server-top">
                <span>EC2 INSTANCE</span>
                <span className="running">● RUNNING</span>
              </div>

              <div className="server-icon">
                🖥️
              </div>

              <h3>dev-server-01</h3>

              <p>Amazon Linux • t3.micro</p>

              <div className="server-line"></div>

              <div className="server-details">
                <div>
                  <small>REGION</small>
                  <strong>ap-south-1</strong>
                </div>

                <div>
                  <small>UPTIME</small>
                  <strong>12h 42m</strong>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* Stats */}
        <section className="stats">

          <div className="stat">
            <div className="stat-icon purple">⚡</div>

            <div>
              <small>STATUS</small>
              <h3>Online</h3>
              <span className="green-text">● Healthy</span>
            </div>
          </div>

          <div className="stat">
            <div className="stat-icon blue">⚙️</div>

            <div>
              <small>CPU USAGE</small>
              <h3>24%</h3>
              <span>Normal usage</span>
            </div>
          </div>

          <div className="stat">
            <div className="stat-icon orange">💾</div>

            <div>
              <small>MEMORY</small>
              <h3>1.2 GB</h3>
              <span>of 2 GB</span>
            </div>
          </div>

          <div className="stat">
            <div className="stat-icon green">🚀</div>

            <div>
              <small>DEPLOYMENTS</small>
              <h3>12</h3>
              <span className="green-text">↑ 3 this week</span>
            </div>
          </div>

        </section>

        {/* Content */}
        <section className="content-grid">

          {/* Deployment */}
          <div className="panel">

            <div className="panel-header">
              <div>
                <span className="panel-label">DEPLOYMENT</span>
                <h2>Application Status</h2>
              </div>

              <span className="success-badge">
                ● LIVE
              </span>
            </div>

            <div className="deployment-box">

              <div className="app-icon">
                ⚛
              </div>

              <div className="app-info">
                <h3>React Demo App</h3>
                <p>Latest deployment</p>
              </div>

              <div className="version">
                <small>VERSION</small>
                <strong>v1.0.0</strong>
              </div>

            </div>

            <div className="pipeline">

              <div className="step completed">
                <div>✓</div>
                <span>Build</span>
              </div>

              <div className="line"></div>

              <div className="step completed">
                <div>✓</div>
                <span>Docker</span>
              </div>

              <div className="line"></div>

              <div className="step completed">
                <div>✓</div>
                <span>Deploy</span>
              </div>

              <div className="line"></div>

              <div className="step current">
                <div>●</div>
                <span>Live</span>
              </div>

            </div>

          </div>

          {/* Environment */}
          <div className="panel">

            <div className="panel-header">
              <div>
                <span className="panel-label">ENVIRONMENT</span>
                <h2>Infrastructure</h2>
              </div>
            </div>

            <div className="environment">

              <div className="environment-item">
                <span>☁️</span>

                <div>
                  <strong>AWS EC2</strong>
                  <small>Compute Instance</small>
                </div>

                <b className="healthy">Healthy</b>
              </div>

              <div className="environment-item">
                <span>🐳</span>

                <div>
                  <strong>Docker</strong>
                  <small>Container Engine</small>
                </div>

                <b className="healthy">Running</b>
              </div>

              <div className="environment-item">
                <span>📦</span>

                <div>
                  <strong>React</strong>
                  <small>Frontend Application</small>
                </div>

                <b className="healthy">Live</b>
              </div>

            </div>

          </div>

        </section>

        {/* Terminal */}
        <section className="terminal-panel">

          <div className="terminal-header">
            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>deployment-terminal</p>

            <span className="terminal-status">
              LIVE
            </span>
          </div>

          <div className="terminal-body">

            <p>
              <span className="terminal-green">$</span>
              docker ps
            </p>

            <p className="terminal-muted">
              CONTAINER ID &nbsp;&nbsp; IMAGE &nbsp;&nbsp;
              STATUS &nbsp;&nbsp; PORTS
            </p>

            <p>
              <span className="terminal-green">
                a82f91
              </span>
              &nbsp;&nbsp; react-app &nbsp;&nbsp;
              <span className="terminal-green">
                Up 12 hours
              </span>
              &nbsp;&nbsp; :80
            </p>

            <p>
              <span className="terminal-green">$</span>
              systemctl status docker
            </p>

            <p className="terminal-green">
              ✓ Docker service is running
            </p>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer>
        <span>DevDeploy</span>
        <p>
          Built with React • Deployed on AWS EC2
        </p>
      </footer>

    </div>
  );
}

export default App;