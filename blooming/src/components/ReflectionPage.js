import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { NavBar } from './NavBar'; // Assuming NavBar is in the same directory as ReflectionPage
import '../components/reflection.css';

export function ReflectionPage() {
  const [reflection, setReflection] = useState('');
  const [anonymous, setAnonymous] = useState(false); // State for anonymity

  const handleAnonymousToggle = () => {
    setAnonymous(!anonymous);
  };

  const handleSubmitPost = () => {
    // Add logic to submit post, considering 'reflection' and 'anonymous' states
    console.log('Submitting post:', reflection, 'Anonymously?', anonymous);
  };

  return (
    <div className="reflection-card">
      <NavBar />
      <div className="reflection-content">
        <div className="profile-image-container">
          <img src="./img/learning.png" alt="Profile" className="profile-image" />
        </div>
        <div className="text-box-container">
          <h1 className="reflection-page">Module Reflection</h1>
          <h4 className="module-note">Reflect on Modules Content</h4>
          <p className="write-reflection">Write your reflection on the topic discussed</p>
          <label htmlFor="reflection-main-question" className="prompt">
            How was your first period experience?
          </label>
          <ReactQuill
            id="reflection-input"
            value={reflection}
            onChange={setReflection}
            className="reflection-input"
            placeholder="Type your response here..."
            modules={quillModules}
          />
          <div className="button-row">
            <label className="anonymous-label">
              <input type="checkbox" checked={anonymous} onChange={handleAnonymousToggle} />
              Post Anonymously?
            </label>
            <button className="submit-button" onClick={handleSubmitPost}>
              Submit post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Quill modules configuration
const quillModules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'align': [] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
  ],
};

export default ReflectionPage;
