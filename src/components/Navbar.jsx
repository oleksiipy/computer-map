import { motion } from 'framer-motion';
import './Navbar.css';

const tabs = [
  { id: 'map', label: '🗺️ Mapa', shortLabel: '🗺️' },
  { id: 'quiz', label: '🧠 Kvíz', shortLabel: '🧠' },
  { id: 'comparison', label: '⚖️ Porovnanie', shortLabel: '⚖️' },
];

export default function Navbar({ activeTab, onTabChange }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand" onClick={() => onTabChange('map')}>
          <span className="navbar-logo">💻</span>
          <h1 className="navbar-title">Počítačová Mapa</h1>
        </div>
        <div className="navbar-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`navbar-tab ${activeTab === tab.id ? 'navbar-tab--active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              <span className="navbar-tab-label">{tab.label}</span>
              <span className="navbar-tab-short">{tab.shortLabel}</span>
              {activeTab === tab.id && (
                <motion.div
                  className="navbar-tab-indicator"
                  layoutId="tabIndicator"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}