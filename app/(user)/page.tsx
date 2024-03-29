import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import client from '../../lib/sanity.client';
import PreviewSuspense from '../../components/PreviewSuspense';
import PreviewBlogList from '../../components/PreviewBlogList';
import BlogList from '../../components/BlogList';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 3600; // revalidate the static pages

const Page = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#f7ab0a]">
              Loading Preview Data
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto">
        <BlogList posts={posts} />
        <Footer />
      </div>
    </>
  );
};

export default Page;
