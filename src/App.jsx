import { useState } from 'react'
import './App.css'

function App() {
  const [activeNav, setActiveNav] = useState('dashboard')

  const stats = [
    { label: 'Total Revenue', value: '$48,250', change: '+12.5%', positive: true },
    { label: 'Active Users', value: '2,845', change: '+8.2%', positive: true },
    { label: 'Bounce Rate', value: '24.6%', change: '-3.1%', positive: true },
    { label: 'Orders', value: '1,420', change: '-4.3%', positive: false },
  ]

  const activities = [
    { icon: '📦', text: 'New order placed by Sarah Johnson', time: '2 minutes ago', color: '#6c63ff' },
    { icon: '👤', text: 'New user registered: Alex Rivera', time: '18 minutes ago', color: '#4ade80' },
    { icon: '💳', text: 'Payment received from TechCorp Inc.', time: '42 minutes ago', color: '#fbbf24' },
    { icon: '🔔', text: 'System update completed successfully', time: '1 hour ago', color: '#60a5fa' },
  ]

  const navItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'analytics', icon: '📈', label: 'Analytics' },
    { id: 'orders', icon: '📋', label: 'Orders' },
    { id: 'customers', icon: '👥', label: 'Customers' },
    { id: 'products', icon: '📦', label: 'Products' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
  ]

  const barHeights = [45, 70, 55, 90, 65, 100, 80, 50, 85, 60, 75, 40]

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          Dash<span>Board</span>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
              onClick={() => setActiveNav(item.id)}
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <h1>Dashboard</h1>
          <div className="header-right">
            <button className="notification-btn">
              🔔
              <span className="notification-badge"></span>
            </button>
            <div className="avatar">U</div>
          </div>
        </header>

        {/* Content */}
        <div className="content-area">
          {/* Stats Grid */}
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-label">{stat.label}</div>
                <div className="stat-value">{stat.value}</div>
                <div className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                  {stat.change}
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <h2 className="section-title">Recent Activity</h2>
          <div className="activity-list">
            {activities.map((act, idx) => (
              <div key={idx} className="activity-item">
                <div className="activity-icon" style={{ background: `${act.color}22` }}>
                  {act.icon}
                </div>
                <div className="activity-details">
                  <div className="activity-text">{act.text}</div>
                  <div className="activity-time">{act.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="charts-row">
            <div className="chart-card">
              <div className="chart-title">Weekly Revenue</div>
              <div className="chart-placeholder">
                {barHeights.map((h, idx) => (
                  <div
                    key={idx}
                    className="bar"
                    style={{
                      height: `${h}%`,
                      background: `hsl(${250 + idx * 3}, 60%, ${50 + idx * 1.5}%)`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="chart-card">
              <div className="chart-title">Traffic Sources</div>
              <div className="donut-placeholder">
                <div className="donut-ring">
                  <div className="donut-ring-inner">65%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App