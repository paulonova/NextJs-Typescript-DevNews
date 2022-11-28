import Prismic from "@prismicio/client";

enum Api {
  END_POINT = "https://my-next-blogg.prismic.io/api/v2",
}

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(Api.END_POINT, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}
