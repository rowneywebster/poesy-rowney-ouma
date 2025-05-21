import { useState } from "react";
import PoemForm from "./components/PoemForm/PoemForm";
import PoemList from "./components/PoemList/PoemList";
import "./App.css";

const initialPoems = [
  {
    id: 1,
    title: "Sacred Silence",
    author: "Rowney Ouma to LJ",
    content:
      "Sometimes I wonder how it grew,\n" +
      "This quiet thread between us two.\n" +
      "No vows, no names, no lines to trace—\n" +
      "Yet still, it lives in sacred space.\n\n" +
      "When I was hollow, worn, and low,\n" +
      "You didn’t ask—you seemed to know.git \n" +
      "A word, a glance, the calm you gave,\n" +
      "Reached parts I never thought to save.\n\n" +
      "Not every bond needs to be seen,\n" +
      "Some only live in what's between.\n" +
      "And though the world may never guess,\n" +
      "You held my heart without possess.\n\n" +
      "So let this be our silent truth:\n" +
      "A place untouched, immune to proof.\n" +
      "You brought me peace when I had none—\n" +
      "A quiet light, a rising sun.",
    isRead: false,
  },
  {
    id: 2,
    title: "The Breakthrough",
    author: "Taylor Visionary",
    content:
      "Ideas like seeds need time to grow,\nWater with patience, watch them glow.",
    isRead: false,
  },
  {
    id: 3,
    title: "Legacy",
    author: "Jordan Pioneer",
    content:
      "Not in gold or trophies bright,\nBut in changed lives shines your light.",
    isRead: false,
  },
];

function App() {
  const [poems, setPoems] = useState(initialPoems);
  const [showForm, setShowForm] = useState(false);

  const handleAddPoem = (newPoem) => {
    setPoems([
      ...poems,
      {
        ...newPoem,
        id: Date.now(),
        isRead: false,
      },
    ]);
    setShowForm(false);
  };

  const toggleReadStatus = (id) => {
    setPoems(
      poems.map((poem) =>
        poem.id === id ? { ...poem, isRead: !poem.isRead } : poem
      )
    );
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
            {showForm ? "Hide Poem Form" : "Show Poem Form"}
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
