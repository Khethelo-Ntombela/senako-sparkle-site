// Netlify Function (v2) wrapping the TanStack Start SSR handler.
// Serves all non-static requests; static assets in dist/client are served
// directly by Netlify because `preferStatic: true` is set below.
import serverHandler from "../../dist/server/server.js";

export default async (request, context) => {
  return serverHandler.fetch(request, {}, context);
};

export const config = {
  path: "/*",
  preferStatic: true,
};
