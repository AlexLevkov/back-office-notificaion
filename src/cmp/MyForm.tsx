import React, { useState } from 'react';
import axios from 'axios';

const MyForm = () => {

  const initState = {
    appId: '',
    appToken: '',
    title: '',
    body: '',
  }

  const [formData, setFormData] = useState(initState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://app.nativenotify.com/api/notification', formData);
      console.log(response.data);
      alert(response.data);
      setFormData(initState)
    } catch (error) {
      console.error('Error sending data', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="appId">App ID:</label>
        <input
          type="text"
          name="appId"
          value={formData.appId}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="appToken">App Token:</label>
        <input
          type="text"
          name="appToken"
          value={formData.appToken}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          name="body"
          value={formData.body}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
