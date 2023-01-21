import type { NextApiRequest, NextApiResponse } from 'next';

const preview = (request: NextApiRequest, response: NextApiResponse) => {
  response.setPreviewData({});
  response.writeHead(307, { Location: '/' });
  response.end();
};

export default preview;
