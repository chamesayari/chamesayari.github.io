export default {
  async fetch(request) {
      // The URL for the remote third party API you want to fetch from
      // but does not implement CORS
      const API_URL = "https://raw.githubusercontent.com/chamesayari/chamesayari.github.io/main/giftCardConso.html";

      const html = "<p>REAL WORK.</p>"


      async function handleRequest(request) {
          // Rewrite request to point to API URL. This also makes the request mutable
          // so you can add the correct Origin header to make the API server think
          // that this request is not cross-site.
          ///request = new Request(API_URL, request);
          ///request.headers.set("Origin", new URL(API_URL).origin);
          let response = await fetch(request);
          // Recreate the response so you can modify the headers

          ///response = new Response(response.body, response);
          response = new Response(html, response);
          // Set CORS headers

          response.headers.set("Access-Control-Allow-Origin", "*");

          // Append to/Add Vary header so browser will cache response correctly
          response.headers.append("Vary", "Origin");

          return response;
      }

    const url = new URL(request.url);
    return handleRequest(request);
},
}
