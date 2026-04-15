import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions } from '../data/content';
import './Quiz.css';

const emojis = {
  start: '🧠',
  correct: '✅',
  wrong: '❌',
  perfect: '🎉',
  good: '👍',
  ok: '💡',
};

export default function Quiz({ onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion) / quizQuestions.length) * 100;

  const handleSelect = (index) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowResult(true);
    const isCorrect = index === question.correctIndex;
    if (isCorrect) setScore((s) => s + 1);
    setAnsweredQuestions((prev) => [...prev, { questionIndex: currentQuestion, selectedIndex: index, isCorrect }]);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((c) => c + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
    setAnsweredQuestions([]);
  };

  const getResultEmoji = () => {
    if (score === quizQuestions.length) return emojis.perfect;
    if (score >= quizQuestions.length - 1) return emojis.good;
    return emojis.ok;
  };

  const getResultMessage = () => {
    if (score === quizQuestions.length) return 'Výborne! Zvládol si všetky otázky!';
    if (score >= quizQuestions.length - 1) return 'Skvelé! Si takmer pri dokonalosti!';
    return 'Dobrý pokus! Skús to znova a nauč sa viac!';
  };

  if (isFinished) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="quiz-container"
      >
        <div className="quiz-finished">
          <span className="quiz-finished-emoji">{getResultEmoji()}</span>
          <h2>{getResultMessage()}</h2>
          <div className="quiz-score-display">
            <span className="quiz-score-number">{score}</span>
            <span className="quiz-score-divider">/</span>
            <span className="quiz-score-total">{quizQuestions.length}</span>
          </div>
          <div className="quiz-results-list">
            {answeredQuestions.map((aq, i) => (
              <div key={i} className={`quiz-result-item ${aq.isCorrect ? 'quiz-result-correct' : 'quiz-result-wrong'}`}>
                <span className="quiz-result-icon">{aq.isCorrect ? '✅' : '❌'}</span>
                <span className="quiz-result-text">{quizQuestions[aq.questionIndex].question}</span>
              </div>
            ))}
          </div>
          <div className="quiz-actions">
            <button className="quiz-btn quiz-btn-primary" onClick={handleRestart}>
              🔄 Skús znova
            </button>
            <button className="quiz-btn quiz-btn-secondary" onClick={onBack}>
              🗺️ Späť na mapu
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="quiz-container"
    >
      <div className="quiz-header">
        <h2>🧠 Kvíz o počítači</h2>
        <p>Over si svoje vedomosti!</p>
      </div>

      <div className="quiz-progress-bar">
        <motion.div
          className="quiz-progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      <div className="quiz-step">
        Otázka {currentQuestion + 1} z {quizQuestions.length}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className="quiz-question-card"
        >
          <h3 className="quiz-question">{question.question}</h3>
          <div className="quiz-options">
            {question.options.map((option, i) => {
              let optionClass = 'quiz-option';
              if (showResult) {
                if (i === question.correctIndex) optionClass += ' quiz-option--correct';
                else if (i === selectedAnswer && i !== question.correctIndex) optionClass += ' quiz-option--wrong';
                else optionClass += ' quiz-option--dimmed';
              }
              return (
                <motion.button
                  key={i}
                  className={optionClass}
                  onClick={() => handleSelect(i)}
                  whileHover={!showResult ? { scale: 1.02 } : {}}
                  whileTap={!showResult ? { scale: 0.98 } : {}}
                  disabled={selectedAnswer !== null}
                >
                  <span className="quiz-option-letter">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="quiz-option-text">{option}</span>
                  {showResult && i === question.correctIndex && (
                    <span className="quiz-option-check">✓</span>
                  )}
                  {showResult && i === selectedAnswer && i !== question.correctIndex && (
                    <span className="quiz-option-check">✗</span>
                  )}
                </motion.button>
              );
            })}
          </div>

          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="quiz-explanation"
            >
              <p>{question.explanation}</p>
              <button className="quiz-btn quiz-btn-primary" onClick={handleNext}>
                {currentQuestion < quizQuestions.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledky'}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}