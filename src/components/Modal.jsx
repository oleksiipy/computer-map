import { motion, AnimatePresence } from 'framer-motion';
import './Modal.css';

const categoryColors = {
  input: { bg: 'var(--green-50)', border: 'var(--green-500)', badge: 'Vstupné' },
  output: { bg: 'var(--orange-100)', border: 'var(--orange-500)', badge: 'Výstupné' },
  processing: { bg: 'var(--blue-50)', border: 'var(--blue-500)', badge: 'Spracovanie' },
  memory: { bg: 'var(--purple-50)', border: 'var(--purple-500)', badge: 'Pamäť' },
  storage: { bg: 'var(--green-50)', border: 'var(--green-500)', badge: 'Úložisko' },
  architecture: { bg: 'var(--blue-50)', border: 'var(--blue-500)', badge: 'Architektúra' },
  concept: { bg: 'var(--purple-50)', border: 'var(--purple-500)', badge: 'Pojem' },
};

export default function Modal({ data, onClose }) {
  if (!data) return null;

  const cat = categoryColors[data.category] || categoryColors.concept;

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Zavrieť">
              ✕
            </button>

            <div className="modal-header" style={{ background: cat.bg }}>
              <span className="modal-icon">{data.icon}</span>
              <div>
                <span className="modal-badge" style={{ background: cat.border }}>
                  {cat.badge}
                </span>
                <h2 className="modal-title">{data.title}</h2>
              </div>
            </div>

            {data.image && (
              <div className="modal-image-wrapper">
                <img
                  src={data.image}
                  alt={data.title}
                  className="modal-image"
                  loading="lazy"
                />
              </div>
            )}

            <div className="modal-body">
              <p className="modal-description">{data.shortDesc}</p>

              <div className="modal-section">
                <h3>📖 Podrobnosti</h3>
                <p>{data.explanation}</p>
              </div>

              {data.keyTerms && data.keyTerms.length > 0 && (
                <div className="modal-section">
                  <h3>🔑 Kľúčové pojmy</h3>
                  <div className="modal-terms">
                    {data.keyTerms.map((kt, i) => (
                      <div key={i} className="modal-term">
                        <span className="modal-term-name">{kt.term}</span>
                        <span className="modal-term-desc">{kt.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {data.parameters && data.parameters.length > 0 && (
                <div className="modal-section">
                  <h3>📊 Parametre</h3>
                  <div className="modal-params">
                    {data.parameters.map((p, i) => (
                      <div key={i} className="modal-param">
                        <span className="modal-param-label">{p.label}</span>
                        <span className="modal-param-value">{p.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {data.examples && data.examples.length > 0 && (
                <div className="modal-section">
                  <h3>💡 Príklady</h3>
                  <div className="modal-examples">
                    {data.examples.map((ex, i) => (
                      <span key={i} className="modal-example-tag">{ex}</span>
                    ))}
                  </div>
                </div>
              )}

              {data.funFact && (
                <div className="modal-fun-fact">
                  <span className="fun-fact-icon">🌟</span>
                  <span>{data.funFact}</span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}