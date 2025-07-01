import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import type { BlogPost } from '../types';

interface BlogPostPageProps {
  posts: BlogPost[];
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ posts }) => {
  const { postId } = useParams<{ postId: string }>();
  const post = posts.find(p => p.id === postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"> {/* Added padding for navbar */}
      <article className="bg-secondary p-6 sm:p-8 rounded-lg shadow-xl">
        {post.imageUrl && (
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-64 object-cover rounded-md mb-8" 
          />
        )}
        <h1 className="text-3xl sm:text-4xl font-bold text-accent mb-4">{post.title}</h1>
        <p className="text-sm text-muted-text mb-1">By {post.author}</p>
        <p className="text-sm text-muted-text mb-6">{post.date}</p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs bg-primary text-muted-text px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        )}

        <div
          className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none text-light-text prose-headings:text-accent prose-a:text-accent hover:prose-a:text-sky-300 prose-strong:text-light-text"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-12 pt-6 border-t border-primary">
          <Link to="/blog" className="text-accent hover:text-sky-300 transition-colors font-medium">
            &larr; Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
