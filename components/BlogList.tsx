import React from 'react';
//import { Link } from 'react-router-dom';
import type { BlogPost } from '../types';
import Section from './Section';
import BlogPostCard from './BlogPostCard';

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <Section id="bloglist" title="My Blog" className="pt-24"> {/* Added pt-24 for navbar offset */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-text">Working on it..</p>
      )}
    </Section>
  );
};

export default BlogList;
