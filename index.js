export default {
  async fetch(request) {
    // The URL you want people to be sent to
    const destinationURL = "https://dhak-topaz.vercel.app/";

    // This creates a 301 (Permanent) redirect
    return Response.redirect(destinationURL, 301);
  },
};
