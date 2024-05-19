/* import jwt from "jsonwebtoken";

export function generateJwt(payload, options = {}) {
  try {
    const token = jwt.sign(payload, process.env.REACT_APP_SECRET_KEY, options)
    return token
  } catch (error) {
    console.error("Error generating JWT:", error);
    throw error;
  }
} */

/* BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to:
        - add a fallback 'resolve.fallback: { "buffer": require.resolve("buffer/") }'
        - install 'buffer'
If you don't want to include a polyfill, you can use an empty module like this:
        resolve.fallback: { "buffer": false }

webpack compiled with 16 errors and 1 warning */
