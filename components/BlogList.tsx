import Image from 'next/image';
import urlFor from '../lib/urlFor';
import ClientSideRoute from './ClientSideRoute';

interface Prop {
  posts: Posts[];
}

const BlogList: React.FC<Prop> = ({ posts }) => {
  return (
    <div>
      <hr className="border-[#f7ab0a] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {/* Posts */}
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {post.categories.map((categories) => (
                      <div
                        key={categories._id}
                        className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        <p>{categories.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Subtitle */}
              <div className="flex gap-5 mt-4">
                <div className="flex justify-center flex-col">
                  <div>
                    <p className="text-gray-800 text-xl font-bold hover:text-gray-600">
                      {post.title}
                    </p>
                  </div>
                  <div className="flex-col justify-center px-4 mt-2">
                    <span className="text-m leading-5 text-gray-500 line-clamp-5">
                      {post.description}
                    </span>
                  </div>
                  <div className="flex py-5">
                    <Image
                      src={urlFor(post.author.image).url()}
                      width={40}
                      height={40}
                      alt={post.author.name}
                      className="rounded-full"
                    />
                    <div className="flex flex-col justify-center px-4">
                      <p className="text-md font-bold text-gray-800 hover:text-gray-600">
                        {post.author.name}
                      </p>
                      <span className="text-sm text-gray-500">
                        {post.author.designation.toLocaleLowerCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

/* 
              <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">{post.title}</p>
                <p className="line-clamp-2 text-gray-500">{post.description}</p>
              </div>

              <p className="mt-5 font-bold flex items-center group-hover:underline">
                Read Post
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </p>

                                <Image
                    src={urlFor(post.author.image).url()}
                    width={40}
                    height={40}
                    alt={post.author.name}
                    className="rounded-full object-contain"
                  />

*/
