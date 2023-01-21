import type { NextApiRequest, NextApiResponse } from 'next';

const exit = (request: NextApiRequest, response: NextApiResponse) => {
  response.clearPreviewData();
  response.writeHead(307, { Location: '/' });
  response.end();
};

export default exit;
