Scripts:
  1. npm start - to run dev. server;
  2. npm run server - to run proxy server.

The solution contains a proxy server. The reason, why it's here, is to get suggestions using Goole API. Due to suggestions API isn't public, it's not possible to get a proper response due to cross-origin request limitations. But using the proxy server we can avoid this limitations.