import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

export function createClient({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient("my-blog", config);

  prismicNext.enableAutoPreviews({ client, previewData, req });

  return client;
}

export function getPrismicClient(req?: unknown) {
  const client = new prismic.Client("https://my-next-blogg.prismic.io/api/v2", {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return client;
}
