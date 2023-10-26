import React from "react";
import "../Blog.css";
import HeroImg from "../assets/blog/hero-img.JPG";
import BlogImg1 from '../assets/blog/blog1.jpeg'
import BlogImg2 from '../assets/blog/blog2.jpeg'
import BlogImg3 from '../assets/blog/blog3.jpg'
import BlogImg4 from '../assets/blog/blog4.jpg'


const blogPosts = [
  {
    id: 1,
    title: 'Blog Post 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ad eum accusantium, deserunt repellendus consectetur omnis error nam, exercitationem sapiente a unde quibusdam molestias vitae expedita. Odit cupiditate tempora quidem!',
    imageUrl: BlogImg1,
    relatedTopics: ['Frontend dev', 'backend dev', 'devops'],
  },
  {
    id: 2,
    title: 'Blog Post 2',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis qui autem sit tempora sint eligendi dicta laboriosam eius provident vitae harum consequuntur, doloribus maxime error debitis accusantium nulla velit quae!',
    imageUrl: BlogImg2, 
    relatedTopics: ['Frontend dev', 'Backend development', 'devops'],
  },
  {
    id: 3,
    title: 'Blog Post 3',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis qui autem sit tempora sint eligendi dicta laboriosam eius provident vitae harum consequuntur, doloribus maxime error debitis accusantium nulla velit quae!',
    imageUrl: BlogImg3,
    relatedTopics: ['App dev', 'Cloud'], 
  },
  {
    id: 4,
    title: 'Blog Post 4',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis qui autem sit tempora sint eligendi dicta laboriosam eius provident vitae harum consequuntur, doloribus maxime error debitis accusantium nulla velit quae!',
    imageUrl: BlogImg4,
    relatedTopics: ['BlockChain Developement', 'Artificial intelligence', 'DSA'],
  },
  {
    id: 5,
    title: 'Blog Post 5',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis qui autem sit tempora sint eligendi dicta laboriosam eius provident vitae harum consequuntur, doloribus maxime error debitis accusantium nulla velit quae!',
    imageUrl: BlogImg1, 
    relatedTopics: ['Frontend dev', 'backend dev', 'devops'], 
  },
  {
    id: 6,
    title: 'Blog Post 6',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis qui autem sit tempora sint eligendi dicta laboriosam eius provident vitae harum consequuntur, doloribus maxime error debitis accusantium nulla velit quae!',
    imageUrl: BlogImg2,
    relatedTopics: ['Frontend dev', 'backend dev', 'devops'], 
  }
];

function Blog() {
  return (
    <div className="blog">
      <h1 className="blog-title">
        {" "}
        <span style={{ color: "#005AC1" }}>Insights</span>,
        <span style={{ color: "#00BFA5" }}> Stories</span>
        <span style={{ color: "black" }}>, and </span>
        <span style={{ color: "#FF7370" }}>Inspiration</span>
      </h1>
      <p className="blog-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        placeat iusto, tempora perferendis labore dolor eligendi dolore ducimus
        quaerat neque incidunt, sequi ab, esse fugiat animi et doloremque natus
        provident?
      </p>
      <img className="blog-image" src={HeroImg} alt="" />
      <div className="blog-list">
        <h2 className="blog-list-title">Blog Post</h2>
        <button className="submit-button">Submit Blog Post</button>
      </div>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.imageUrl} alt={post.title} className="blog-card-image" />
            <div className="blog-card-content">
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-description">{post.description}</p>
              <div className="blog-topics">
                <div className="related-topic-container">
                  {post.relatedTopics.map((topic, index) => (
                    <span key={index} className="related-topic">{topic}</span>
                  ))}
                </div>
              </div>
              <button className="read-more-button">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;

