import { motion } from 'framer-motion';
import './ComputerMap.css';

function DeskSvg({ activeComponent, hoveredComponent, onHover, onSelect }) {
  return (
    <svg viewBox="0 0 100 108" className="computer-map-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="deskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8EDF5" />
          <stop offset="100%" stopColor="#D1D9E8" />
        </linearGradient>
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#16213e" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="softShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.1)" />
        </filter>
      </defs>

      <rect x="0" y="0" width="100" height="108" fill="url(#deskGrad)" rx="2" />

      {/* Monitor label — above monitor */}
      <text x="50" y="3.5" textAnchor="middle" className="map-label" fontSize="3" fill={hoveredComponent === 'monitor' ? '#4F6CF7' : '#666'} style={{ pointerEvents: 'none', fontFamily: 'var(--font-sans)' }}>
        Monitor
      </text>

      {/* Monitor */}
      <motion.g
        className="map-component"
        style={{ cursor: 'pointer' }}
        onHoverStart={() => onHover('monitor')}
        onHoverEnd={() => onHover(null)}
        onClick={() => onSelect('monitor')}
        filter={activeComponent === 'monitor' || hoveredComponent === 'monitor' ? 'url(#glow)' : 'url(#softShadow)'}
      >
        <motion.rect
          x="25" y="5" width="50" height="34" rx="3"
          fill={activeComponent === 'monitor' ? '#4F6CF7' : '#2a2a3e'}
          stroke={hoveredComponent === 'monitor' ? '#6B83F9' : '#444466'}
          strokeWidth={hoveredComponent === 'monitor' ? 1 : 0.5}
          animate={{ scale: hoveredComponent === 'monitor' ? 1.02 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ transformOrigin: '50px 22px' }}
        />
        <rect x="27" y="7" width="46" height="26" rx="1.5" fill="url(#screenGrad)" />
        <rect x="29" y="9" width="16" height="2" rx="0.5" fill="rgba(79,108,247,0.6)" />
        <rect x="29" y="13" width="24" height="1" rx="0.3" fill="rgba(255,255,255,0.2)" />
        <rect x="29" y="15.5" width="20" height="1" rx="0.3" fill="rgba(255,255,255,0.15)" />
        <rect x="29" y="18" width="22" height="1" rx="0.3" fill="rgba(255,255,255,0.15)" />
        <rect x="29" y="20.5" width="18" height="1" rx="0.3" fill="rgba(255,255,255,0.1)" />
        <rect x="47" y="9" width="24" height="14" rx="1" fill="rgba(139,92,246,0.15)" />
        <rect x="49" y="11" width="10" height="1" rx="0.3" fill="rgba(139,92,246,0.4)" />
        <rect x="49" y="13.5" width="8" height="1" rx="0.3" fill="rgba(139,92,246,0.3)" />
        <circle cx="50" cy="38" r="1" fill="#555" />
        <rect x="46" y="38" width="8" height="4" rx="0.5" fill="#333" />
        <rect x="38" y="42" width="24" height="2" rx="1" fill="#3a3a52" />
      </motion.g>

      {/* Cable from monitor to system unit */}
      <path d="M50 44 L50 51" stroke="#555" strokeWidth="0.8" fill="none" style={{ pointerEvents: 'none' }} />

      {/* Cable from keyboard to system unit (left side) */}
      <path d="M14 91 C8 91 8 64 26 64" stroke="#555" strokeWidth="0.8" fill="none" style={{ pointerEvents: 'none' }} />

      {/* Cable from mouse to system unit (right side) */}
      <path d="M72 91 C80 91 80 64 74 64" stroke="#555" strokeWidth="0.8" fill="none" style={{ pointerEvents: 'none' }} />

      {/* System Unit background */}
      <motion.g
        style={{ cursor: 'pointer' }}
        onHoverStart={() => onHover('systemUnit')}
        onHoverEnd={() => onHover(null)}
        onClick={() => onSelect('systemUnit')}
        filter={activeComponent === 'systemUnit' || hoveredComponent === 'systemUnit' ? 'url(#glow)' : 'url(#softShadow)'}
      >
        <motion.rect
          x="26" y="51" width="48" height="26" rx="3"
          fill={activeComponent === 'systemUnit' ? '#4F6CF7' : '#3a3a52'}
          stroke={hoveredComponent === 'systemUnit' ? '#6B83F9' : '#444466'}
          strokeWidth={hoveredComponent === 'systemUnit' ? 1 : 0.5}
          animate={{ scale: hoveredComponent === 'systemUnit' ? 1.02 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ transformOrigin: '50px 64px' }}
        />
        <rect x="28" y="53" width="44" height="22" rx="2" fill="#2a2a3e" />

        {/* GPU inside */}
        <motion.g style={{ cursor: 'pointer' }}
          onHoverStart={() => onHover('gpu')}
          onHoverEnd={() => onHover(null)}
          onClick={(e) => { e.stopPropagation(); onSelect('gpu'); }}
        >
          <motion.rect
            x="30" y="68" width="40" height="5" rx="1.5"
            fill={activeComponent === 'gpu' ? '#4F6CF7' : '#1a1a2e'}
            stroke={hoveredComponent === 'gpu' ? '#6B83F9' : '#333355'}
            strokeWidth={hoveredComponent === 'gpu' ? 0.8 : 0.3}
            animate={{ scale: hoveredComponent === 'gpu' ? 1.05 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ transformOrigin: '50px 70.5px' }}
          />
          <text x="50" y="71.5" textAnchor="middle" fontSize="2.5" fill={activeComponent === 'gpu' ? '#fff' : '#8888aa'} fontWeight="600" style={{ pointerEvents: 'none', fontFamily: 'var(--font-sans)' }}>GPU</text>
        </motion.g>
      </motion.g>

      {/* CPU inside — on top of system unit */}
      <motion.g style={{ cursor: 'pointer' }}
        onHoverStart={() => onHover('cpu')}
        onHoverEnd={() => onHover(null)}
        onClick={(e) => { e.stopPropagation(); onSelect('cpu'); }}
      >
        <motion.rect
          x="30" y="55" width="12" height="10" rx="1.5"
          fill={activeComponent === 'cpu' ? '#4F6CF7' : '#1a1a2e'}
          stroke={hoveredComponent === 'cpu' ? '#6B83F9' : '#333355'}
          strokeWidth={hoveredComponent === 'cpu' ? 0.8 : 0.3}
          animate={{ scale: hoveredComponent === 'cpu' ? 1.05 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ transformOrigin: '36px 60px' }}
        />
        <text x="36" y="61" textAnchor="middle" fontSize="2.5" fill={activeComponent === 'cpu' ? '#fff' : '#8888aa'} fontWeight="600" style={{ pointerEvents: 'none', fontFamily: 'var(--font-sans)' }}>CPU</text>
      </motion.g>

      {/* RAM inside */}
      <motion.g style={{ cursor: 'pointer' }}
        onHoverStart={() => onHover('ram')}
        onHoverEnd={() => onHover(null)}
        onClick={(e) => { e.stopPropagation(); onSelect('ram'); }}
      >
        <motion.rect
          x="44" y="55" width="12" height="10" rx="1.5"
          fill={activeComponent === 'ram' ? '#A78BFA' : '#1a1a2e'}
          stroke={hoveredComponent === 'ram' ? '#A78BFA' : '#333355'}
          strokeWidth={hoveredComponent === 'ram' ? 0.8 : 0.3}
          animate={{ scale: hoveredComponent === 'ram' ? 1.05 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ transformOrigin: '50px 60px' }}
        />
        <text x="50" y="61" textAnchor="middle" fontSize="2.5" fill={activeComponent === 'ram' ? '#fff' : '#8888aa'} fontWeight="600" style={{ pointerEvents: 'none', fontFamily: 'var(--font-sans)' }}>RAM</text>
      </motion.g>

      {/* Storage inside */}
      <motion.g style={{ cursor: 'pointer' }}
        onHoverStart={() => onHover('storage')}
        onHoverEnd={() => onHover(null)}
        onClick={(e) => { e.stopPropagation(); onSelect('storage'); }}
      >
        <motion.rect
          x="58" y="55" width="12" height="10" rx="1.5"
          fill={activeComponent === 'storage' ? '#22C55E' : '#1a1a2e'}
          stroke={hoveredComponent === 'storage' ? '#4ADE80' : '#333355'}
          strokeWidth={hoveredComponent === 'storage' ? 0.8 : 0.3}
          animate={{ scale: hoveredComponent === 'storage' ? 1.05 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ transformOrigin: '64px 60px' }}
        />
        <text x="64" y="61" textAnchor="middle" fontSize="2.5" fill={activeComponent === 'storage' ? '#fff' : '#8888aa'} fontWeight="600" style={{ pointerEvents: 'none', fontFamily: 'var(--font-sans)' }}>SSD</text>
      </motion.g>

      {/* System unit label */}
      <text x="50" y="82" textAnchor="middle" className="map-label" fontSize="3" fill={hoveredComponent === 'systemUnit' ? '#4F6CF7' : '#666'} style={{ pointerEvents: 'none' }}>
        Systémová jednotka
      </text>

      {/* Keyboard */}
      <motion.g
        className="map-component"
        style={{ cursor: 'pointer' }}
        onHoverStart={() => onHover('keyboard')}
        onHoverEnd={() => onHover(null)}
        onClick={() => onSelect('keyboard')}
        filter={activeComponent === 'keyboard' || hoveredComponent === 'keyboard' ? 'url(#glow)' : 'url(#softShadow)'}
      >
        <motion.rect
          x="14" y="87" width="36" height="9" rx="2"
          fill={activeComponent === 'keyboard' ? '#4F6CF7' : '#3a3a52'}
          stroke={hoveredComponent === 'keyboard' ? '#6B83F9' : '#444466'}
          strokeWidth={hoveredComponent === 'keyboard' ? 1 : 0.5}
          animate={{ scale: hoveredComponent === 'keyboard' ? 1.02 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ transformOrigin: '32px 91.5px' }}
        />
        <g fill={activeComponent === 'keyboard' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'} style={{ pointerEvents: 'none' }}>
          {Array.from({ length: 10 }, (_, i) => (
            <rect key={`k1-${i}`} x={16 + i * 3.2} y="88.5" width="2.4" height="1.5" rx="0.3" />
          ))}
          {Array.from({ length: 9 }, (_, i) => (
            <rect key={`k2-${i}`} x={17.6 + i * 3.2} y="90.5" width="2.4" height="1.5" rx="0.3" />
          ))}
          <rect x="16" y="92.5" width="4" height="1.5" rx="0.3" />
          {Array.from({ length: 7 }, (_, i) => (
            <rect key={`k3-${i}`} x={21 + i * 3.2} y="92.5" width="2.4" height="1.5" rx="0.3" />
          ))}
          <rect x="44" y="92.5" width="4" height="1.5" rx="0.3" />
          <rect x="16" y="94.5" width="5" height="1.5" rx="0.3" />
          <rect x="22" y="94.5" width="24" height="1.5" rx="0.3" />
          <rect x="47" y="94.5" width="2" height="1.5" rx="0.3" />
        </g>
      </motion.g>
      <text x="32" y="99" textAnchor="middle" className="map-label" fontSize="3" fill={hoveredComponent === 'keyboard' ? '#4F6CF7' : '#666'} style={{ pointerEvents: 'none' }}>
        Klávesnica
      </text>

      {/* Mouse */}
      <motion.g
        className="map-component"
        style={{ cursor: 'pointer' }}
        onHoverStart={() => onHover('mouse')}
        onHoverEnd={() => onHover(null)}
        onClick={() => onSelect('mouse')}
        filter={activeComponent === 'mouse' || hoveredComponent === 'mouse' ? 'url(#glow)' : 'url(#softShadow)'}
      >
        <motion.ellipse
          cx="66" cy="91"
          rx="6" ry="7"
          fill={activeComponent === 'mouse' ? '#4F6CF7' : '#3a3a52'}
          stroke={hoveredComponent === 'mouse' ? '#6B83F9' : '#444466'}
          strokeWidth={hoveredComponent === 'mouse' ? 1 : 0.5}
          animate={{ scale: hoveredComponent === 'mouse' ? 1.05 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ transformOrigin: '66px 91px' }}
        />
        <line x1="66" y1="85" x2="66" y2="90" stroke={activeComponent === 'mouse' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'} strokeWidth="0.5" style={{ pointerEvents: 'none' }} />
        <ellipse cx="66" cy="87.5" rx="1.5" ry="2" fill={activeComponent === 'mouse' ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.15)'} style={{ pointerEvents: 'none' }} />
      </motion.g>
      <text x="66" y="102" textAnchor="middle" className="map-label" fontSize="3" fill={hoveredComponent === 'mouse' ? '#4F6CF7' : '#666'} style={{ pointerEvents: 'none' }}>
        Myš
      </text>
    </svg>
  );
}

export default function ComputerMap({ activeComponent, hoveredComponent, onHover, onSelect }) {
  return (
    <div className="computer-map-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="computer-map-container"
      >
        <div className="computer-map-header">
          <h2>Klikni na komponent a spoznaj ho</h2>
          <p>Preskúmajte jednotlivé časti počítača kliknutím na ne</p>
        </div>
        <div className="computer-map-svg-wrapper">
          <DeskSvg
            activeComponent={activeComponent}
            hoveredComponent={hoveredComponent}
            onHover={onHover}
            onSelect={onSelect}
          />
        </div>
        <div className="computer-map-legend">
          <div className="legend-item" onClick={() => onSelect('vonNeumann')}>
            <span className="legend-icon">📐</span>
            <span>Von Neumannova architektúra</span>
          </div>
          <div className="legend-item" onClick={() => onSelect('hardware')}>
            <span className="legend-icon">🔧</span>
            <span>Hardvér</span>
          </div>
          <div className="legend-item" onClick={() => onSelect('software')}>
            <span className="legend-icon">💿</span>
            <span>Softvér</span>
          </div>
          <div className="legend-item" onClick={() => onSelect('inputDevices')}>
            <span className="legend-icon">📥</span>
            <span>Vstupné zariadenia</span>
          </div>
          <div className="legend-item" onClick={() => onSelect('outputDevices')}>
            <span className="legend-icon">📤</span>
            <span>Výstupné zariadenia</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}