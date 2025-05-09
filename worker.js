// export default {
//   async fetch(request) {
//     return new Response(JSON.stringify({
//       timestamp: Date.now(),
//       status: "healthy"
//     }));
//   }
// }
import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

addEventListener("fetch", (event) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event);
  } catch (e) {
    return new Response(await fetchAsset("index.html", event), {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  }
}

async function fetchAsset(asset, event) {
  const assetUrl = new URL(event.request.url);
  assetUrl.pathname = "/" + asset;
  const assetRequest = new Request(assetUrl.toString(), event.request);
  const response = await getAssetFromKV({ ...event, request: assetRequest });
  return response.body;
}
