'use client';

import UsePreview from '../lib/sanity.preview';
import BlogList from './BlogList';

interface Props {
  query: string;
}

const PreviewBlogList: React.FC<Props> = ({ query }) => {
  const posts = UsePreview(null, query);

  return <BlogList posts={posts} />;
};

export default PreviewBlogList;
