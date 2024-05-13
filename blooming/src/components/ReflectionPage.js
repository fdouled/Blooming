import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { NavBar } from './NavBar'; // Assuming NavBar is in the same directory as ReflectionPage
import '../components/reflection.css';
// import reflectionPosts from './reflectionposts.js';

let reflectionPosts = [
  {
    "id": 1,
    "name": "Hanh Nguyen",
    "post": "My first period experience was confusing and overwhelming. Being a second-generation Vietnamese immigrant, discussions about puberty and periods were scarce in my household, especially after losing my mother at a young age. As I entered middle school, conversations among peers intensified, but my lack of knowledge made me feel isolated and embarrassed to ask questions. When I turned to my father for guidance, I found he was as uninformed as I was. The opportunity to learn in sex ed classes was denied to me, leaving me frustrated and ill-prepared. Turning to the internet for answers proved challenging, as most resources were geared towards adult women or mothers educating their daughters. This lack of accessible and culturally relevant information compounded my uncertainty and anxiety surrounding my first period. As I navigated through this unfamiliar territory, I felt a sense of vulnerability and insecurity. The absence of guidance from my family and limited resources exacerbated my confusion and discomfort. With each passing day, the anticipation of my first period grew, accompanied by a fear of the unknown and a feeling of being left behind compared to my peers."
  },
  {
    "id": 2,
    "name": "Aisha Sayed",
    "post": "As a Community Health Educator, my first period experience was a significant moment that underscored the importance of accessible and culturally sensitive resources for women in my community. Growing up in a household steeped in traditional values and limited discussions about reproductive health, my first period brought feelings of confusion and uncertainty. I remember feeling unprepared and overwhelmed, navigating the experience largely on my own due to cultural taboos surrounding menstruation. Reflecting on my journey, I recognize the critical need for inclusive and non-judgmental spaces where women can openly discuss menstrual health and access reliable information. As a health advocate, I am dedicated to finding safe online resources to share with my community, empowering women to break through cultural barriers and take control of their reproductive health. Through supportive discussions and education, I aim to foster a sense of empowerment and agency among women, enabling them to advocate for their well-being and access the resources they need to thrive."
  },
  {
    "id": 3,
    "name": "Anonymous",
    "post": "I understand firsthand the challenges of navigating reproductive health discussions in a new country. Having arrived in the US about 10 years ago, I was never exposed to this topic within my family or community back home. Now, as a mother to two early teens who are just about to hit puberty, I find myself grappling with the responsibility of educating them about reproductive health. However, with the demands of my job at company x, I struggle to find the time and knowledge to provide them with the essential information they need. I am searching for a platform that can simplify the process of educating my children about reproductive health, while also empowering me to guide them effectively and create a supportive environment where they feel comfortable discussing this topic openly."
  }
];

export function ReflectionPage() {
  const [reflection, setReflection] = useState('');
  const [anonymous, setAnonymous] = useState(false); // State for anonymity
  console.log(reflectionPosts)

  const handleAnonymousToggle = () => {
    setAnonymous(!anonymous);
  };

  const handleSubmitPost = () => {
    // Add logic to submit post, considering 'reflection' and 'anonymous' states
    console.log('Submitting post:', reflection, 'Anonymously?', anonymous);
    // Updating displayed posts by pushing to array didn't work
    // let name = "Jessica Hoang";
    // if(anonymous) {
    //   name = "Anonymous";
    // }
    // let post = reflection;
    // reflectionPosts.push({"id": (reflectionPosts.length + 1), "name": name, "post": post});
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
        <div className='reflection-posts' id='reflection-posts'>
          {reflectionPosts.map((post) => {
            return (
              <div className='post card'>
                <p>{post.name}</p>
                <p>{post.post}</p>
              </div>
            );
          })}
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
