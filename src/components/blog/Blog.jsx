import React from 'react';
import { Link } from 'react-router-dom';
import '../blog/Blog.css';

const Blog = () => {
  return (
    <div className="blog">
      <h1 className="blog-header">Blog</h1>
      <div className="image-grid">
        {blogPosts.map((post, index) => (
          <div className="image-container" key={index}>
            <img src={post.image} alt={post.title} />
            <h1>{post.title}</h1>
            <p className="blog-1">{post.wordCount} - {post.readTime} min read</p>
            <p className="blog-2">{post.excerpt}</p>
            <Link to={`/readmore/${index}`} className="read-more">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const blogPosts = [
  {
    title: "What Are The Different Fridge Heights?",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2023/05/iStock-1392897495-1-400x222.jpg",
    wordCount: "734 words",
    readTime: "3.7",
    excerpt: "Refrigerators come in a variety of sizes and configurations. If you’re in the market for a new fridge, you may be wondering what size is right for your kitchen...",
    content: "Full content for the blog post goes here. Discuss the different heights of fridges, how to choose the right size, and include any other relevant information."
  },
  {
    title: "How To Install An Over The Range Microwave",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2023/03/iStock-1151620512-400x307.jpg",
    wordCount: "814 words",
    readTime: "4.1",
    excerpt: "If you’re looking to upgrade your kitchen, an over-the-range microwave is a great addition. It not only saves counter space but also adds to the overall aesthetic of your kitchen...",
    content: "Full content for the blog post goes here. Provide step-by-step instructions on how to install an over-the-range microwave, along with tips and safety precautions."
  },
  {
    title: "5 Reasons You Should Repair Your Garbage Disposal",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2023/03/iStock-1424529047-400x267.jpg",
    wordCount: "664 words",
    readTime: "3.3",
    excerpt: "Garbage disposals can be very convenient. You rinse food scraps right off the plate or cutting board and run the disposal until they disappear down the drain...",
    content: "Full content for the blog post goes here. Discuss the benefits of repairing a garbage disposal, the cost-effectiveness, and the environmental impact of disposal waste."
  },
  {
    title: "Garbage Disposal Repair Tips",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2023/02/iStock-1398133058-400x272.jpg",
    wordCount: "628 words",
    readTime: "3.1",
    excerpt: "Washing machines have various cycles, all of which are controlled by a timer. The timer’s job is to tell the washing machine how long to stay on each part of the wash cycle...",
    content: "Full content for the blog post goes here. Provide essential tips for diagnosing and repairing garbage disposal issues."
  },
  {
    title: "Refrigerator Maintenance Tips",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2023/01/iStock-1399160717-400x286.jpg",
    wordCount: "791 words",
    readTime: "4.0",
    excerpt: "One of the most important appliances in your kitchen is the refrigerator. It keeps your food cold or frozen so that it doesn’t spoil...",
    content: "Full content for the blog post goes here. Discuss routine maintenance tips, including cleaning coils, checking seals, and monitoring temperatures."
  },
  {
    title: "Common Oven Issues",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2022/12/iStock-1216122354-400x267.jpg",
    wordCount: "612 words",
    readTime: "3.1",
    excerpt: "If you have a garbage disposal, you know they don’t always smell fresh. Sometimes the odor coming from your disposal can be downright disgusting...",
    content: "Full content for the blog post goes here. Identify common issues with ovens and provide troubleshooting tips."
  },
  {
    title: "Dishwasher Repair Guide",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2022/12/iStock-1355251759-400x300.jpg",
    wordCount: "776 words",
    readTime: "3.9",
    excerpt: "When they work properly, washing machines are one of the most useful household appliances. But when your washing machine isn’t working it can be pretty inconvenient...",
    content: "Full content for the blog post goes here. Outline common dishwasher problems and how to fix them."
  },
  {
    title: "Microwave Safety Tips",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2022/09/iStock-1175495774-400x267.jpg",
    wordCount: "478 words",
    readTime: "2.4",
    excerpt: "Washing machines and dryers are fantastic appliances that have made washing linen at home easy. But these systems don’t stay in good condition without routine maintenance...",
    content: "Full content for the blog post goes here. Discuss safety precautions to take when using microwaves."
  },
  {
    title: "Laundry Machine Maintenance",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2022/09/iStock-1314435125-400x266.jpg",
    wordCount: "754 words",
    readTime: "3.8",
    excerpt: "There’s a lot of water involved with washing laundry. So, while laundry machines are built to last, even the best-made machine may leak water from the bottom...",
    content: "Full content for the blog post goes here. Provide maintenance tips for laundry machines to prevent leaks."
  }
];

export default Blog;
