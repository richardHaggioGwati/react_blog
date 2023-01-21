'use client';

import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from './sanity.client';

const onPublicAccessOnly = () => {
  throw new Error('unable to load preview as you are not authenticated');
};

if (!projectId || !dataset) {
  throw new Error(
    'Missing projectId or dataset. Check your sanity.json or .env file.',
  );
}

const usePreview = definePreview({ projectId, dataset, onPublicAccessOnly });

export default usePreview;
