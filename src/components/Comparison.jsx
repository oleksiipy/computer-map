import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { comparisons } from '../data/content';
import './Comparison.css';

export default function Comparison() {
  const [activeTab, setActiveTab] = useState('hardwareVsSoftware');

  const data = comparisons[activeTab];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="comparison-container"
    >
      <div className="comparison-header">
        <h2>⚖️ Porovnanie</h2>
        <p>Rozdiely a spoločné vlastnosti</p>
      </div>

      <div className="comparison-tabs">
        <button
          className={`comparison-tab ${activeTab === 'hardwareVsSoftware' ? 'comparison-tab--active' : ''}`}
          onClick={() => setActiveTab('hardwareVsSoftware')}
        >
          Hardvér vs Softvér
        </button>
        <button
          className={`comparison-tab ${activeTab === 'inputVsOutput' ? 'comparison-tab--active' : ''}`}
          onClick={() => setActiveTab('inputVsOutput')}
        >
          Vstup vs Výstup
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="comparison-content"
        >
          <div className="comparison-cards">
            {data.items.map((item, i) => (
              <div key={i} className={`comparison-card comparison-card--${item.color}`}>
                <h3 className="comparison-card-title">{item.label}</h3>
                <ul className="comparison-card-list">
                  {item.points.map((point, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.1 }}
                      className="comparison-card-item"
                    >
                      <span className="comparison-card-bullet">•</span>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {data.common && data.common.length > 0 && (
            <div className="comparison-common">
              <h4 className="comparison-common-title">🤝 Spoločné vlastnosti</h4>
              <div className="comparison-common-list">
                {data.common.map((c, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="comparison-common-tag"
                  >
                    {c}
                  </motion.span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}