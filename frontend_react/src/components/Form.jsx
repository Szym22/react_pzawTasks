import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('your-api-endpoint', formData);
      setTableData([...tableData, response.data]); 
      setFormData({ name: '', url: '', text: '' });  
    } catch (error) {
      console.error("Error sending data", error);
    }
  };

  return (
    <div>
      <h1>Formularz</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nazwa</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">URL</label>
          <input 
            type="text" 
            className="form-control" 
            id="url" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">Tekst</label>
          <textarea 
            className="form-control" 
            id="text" 
            rows="3" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Wyślij</button>
      </form>
    </div>
  );
}

export default Form;