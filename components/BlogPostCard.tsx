import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`} className="block bg-secondary rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
      {post.imageUrl && (
        <div className="overflow-hidden h-48">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-accent mb-2 group-hover:text-sky-300 transition-colors">{post.title}</h3>
        <p className="text-xs text-muted-text mb-1">By {post.author} on {post.date}</p>
        <p className="text-sm text-light-text mb-3 leading-relaxed">{post.excerpt}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs bg-primary text-muted-text px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        )}
        <span className="text-sm font-medium text-accent group-hover:underline">Read more &rarr;</span>
      </div>
    </Link>
  );
};

export default BlogPostCard;
