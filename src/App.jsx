import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ComputerMap from './components/ComputerMap';
import Modal from './components/Modal';
import Quiz from './components/Quiz';
import Comparison from './components/Comparison';
import { content } from './data/content';
import './App.css';

const clickableComponents = ['monitor', 'keyboard', 'mouse', 'systemUnit', 'cpu', 'ram', 'storage', 'gpu', 'vonNeumann', 'hardware', 'software', 'inputDevices', 'outputDevices', 'printer'];

export default function App() {
  const [activeTab, setActiveTab] = useState('map');
  const [activeComponent, setActiveComponent] = useState(null);
  const [hoveredComponent, setHoveredComponent] = useState(null);

  const handleSelect = useCallback((componentId) => {
    if (clickableComponents.includes(componentId)) {
      setActiveComponent(componentId);
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    setActiveComponent(null);
  }, []);

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
    setActiveComponent(null);
    setHoveredComponent(null);
  }, []);

  const modalData = activeComponent ? content[activeComponent] : null;

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="app">
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="app-main">
        <AnimatePresence mode="wait">
          {activeTab === 'map' && (
            <motion.div
              key="map"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="app-page"
            >
              <ComputerMap
                activeComponent={activeComponent}
                hoveredComponent={hoveredComponent}
                onHover={setHoveredComponent}
                onSelect={handleSelect}
              />
            </motion.div>
          )}

          {activeTab === 'quiz' && (
            <motion.div
              key="quiz"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="app-page"
            >
              <Quiz onBack={() => handleTabChange('map')} />
            </motion.div>
          )}

          {activeTab === 'comparison' && (
            <motion.div
              key="comparison"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="app-page"
            >
              <Comparison />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {modalData && (
          <Modal data={modalData} onClose={handleCloseModal} />
        )}
      </AnimatePresence>

      <footer className="app-footer">
        <p>💻 Počítačová Mapa — Interaktívna učebnica</p>
      </footer>
    </div>
  );
}