import React, { useEffect, useState } from 'react';
import './InstagramSection.css';

const InstagramSection = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // アクセストークンは実際には環境変数等で安全に管理してください
        const response = await fetch('https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=IGQWRPX04yUkpiOUg2bURhRHQtMVNKcjJiQUhpaG5yVjhwMXMyRzUwQnBtNGQwN1lCaThmd1JnWkgyOUw0bGk0b3k2d1B4MGF2VmNtRjd4Q3hGcTN1RjI5allHZAHZAYbjV0RFZABRWtidU5xbWoxZAkRnaUdya1JPTmsZD');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const imagePosts = data.data.filter(post => post.media_type === 'IMAGE').slice(0, 12);
        setPosts(imagePosts);
      } catch (error) {
        setError('Error fetching Instagram posts');
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="instagram-section">
      <h2 className="instagram-title">Instagram Feed</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="instagram-grid">
        {posts.map(post => (
          <a key={post.id} href={post.permalink} className="instagram-item" target="_blank" rel="noopener noreferrer">
            <img src={post.media_url} alt={post.caption || 'Instagram Post'} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;