import PoemItem from './PoemItem';
import './PoemList.css';

const PoemList = ({ poems, onToggleRead }) => {
  return (
    <div className="poem-list-container">
      {poems.map(poem => (
        <PoemItem 
          key={poem.id} 
          poem={poem} 
          onToggleRead={onToggleRead} 
        />
      ))}
    </div>
  );
};

export default PoemList;