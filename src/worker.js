// Serves the static site and sends www.yri.ai to the apex.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.yri.ai") {
      url.hostname = "yri.ai";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
