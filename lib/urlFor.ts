import imageUrlBuilder from '@sanity/image-url';
import client from './sanity.client';

// Get a pre-config url-builder from the sanity client
const builder = imageUrlBuilder(client);

const urlFor = (source: any) => {
  return builder.image(source);
};

export default urlFor;
