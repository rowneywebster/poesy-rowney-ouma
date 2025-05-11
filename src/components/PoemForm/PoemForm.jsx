import { useState } from 'react';
import './PoemForm.css';

const PoemForm = ({ onAddPoem }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) return;
    onAddPoem(formData);
    setFormData({ title: '', author: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="poem-form">
      <input
        type="text"
        placeholder="Poem Title"
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
        required
      />
      <input
        type="text"
        placeholder="Author (Optional)"
        value={formData.author}
        onChange={(e) => setFormData({...formData, author: e.target.value})}
      />
      <textarea
        placeholder="Write your masterpiece here..."
        value={formData.content}
        onChange={(e) => setFormData({...formData, content: e.target.value})}
        rows={6}
        required
      />
      <button type="submit">Add Poem</button>
    </form>
  );
};

export default PoemForm;