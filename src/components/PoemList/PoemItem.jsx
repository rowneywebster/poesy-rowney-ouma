import './PoemList.css';

const PoemItem = ({ poem, onToggleRead }) => {
  return (
    <div className={`poem-item ${poem.isRead ? 'read' : ''}`}>
      <h3>{poem.title}</h3>
      <pre>{poem.content}</pre>
      {poem.author && <p className="author">— {poem.author}</p>}
      <hr className="poem-divider" />
      <button 
        onClick={() => onToggleRead(poem.id)}
        className="read-toggle"
      >
        {poem.isRead ? 'Mark as Unread' : 'Mark as Read'}
      </button>
    </div>
  );
};

export default PoemItem;