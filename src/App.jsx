import { useState } from 'react';
import PoemForm from './components/PoemForm/PoemForm';
import PoemList from './components/PoemList/PoemList';
import './App.css';

const initialPoems = [
  {
    id: 1,
    title: "Victory Lap",
    author: "Sam Success",
    content: "The cheers are sweet after miles of pain,\nEvery drop of sweat was worth the gain.",
    isRead: false
  },
  {
    id: 2,
    title: "The Breakthrough",
    author: "Taylor Visionary",
    content: "Ideas like seeds need time to grow,\nWater with patience, watch them glow.",
    isRead: false
  },
  {
    id: 3,
    title: "Legacy",
    author: "Jordan Pioneer",
    content: "Not in gold or trophies bright,\nBut in changed lives shines your light.",
    isRead: false
  }
];

function App() {
  const [poems, setPoems] = useState(initialPoems);
  const [showForm, setShowForm] = useState(false);

  const handleAddPoem = (newPoem) => {
    setPoems([...poems, {
      ...newPoem,
      id: Date.now(),
      isRead: false
    }]);
    setShowForm(false);
  };

  const toggleReadStatus = (id) => {
    setPoems(poems.map(poem => 
      poem.id === id ? { ...poem, isRead: !poem.isRead } : poem
    ));
  };

  return (
    <div className="app-container">
      <h1>Poetry Garden</h1>
      <div className="two-panel-layout">
        {/* Left Panel - Form */}
        <div className="left-panel">
          <button 
            onClick={() => setShowForm(!showForm)}
            className="toggle-form-btn"
          >
            {showForm ? 'Hide Poem Form' : 'Show Poem Form'}
          </button>
          {showForm && <PoemForm onAddPoem={handleAddPoem} />}
        </div>

        {/* Right Panel - Poems */}
        <div className="right-panel">
          <PoemList poems={poems} onToggleRead={toggleReadStatus} />
        </div>
      </div>
    </div>
  );
}

export default App;