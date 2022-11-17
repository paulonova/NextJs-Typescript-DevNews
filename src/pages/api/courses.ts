import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const courses = [
    {
      id: 1,
      name: "Next js with typescript",
    },
    {
      id: 2,
      name: "React js with typescript",
    },
    {
      id: 3,
      name: "Node js with typescript",
    },
    {
      id: 4,
      name: "SASS",
    },
    {
      id: 4,
      name: "Styled Components",
    },
  ];

  return response.json(courses);
};

/**
 * Every file created in the folder (api) automatically becomes an endpoint!
 * You cannot replace a Backend with this endpoint, the idea here is to configure
 * credentials for accessing payments, servers, logins, etc. Never Backend!
 *
 * URL: http://localhost:3000/api/courses
 */
