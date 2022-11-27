This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Run Json Server

=> npx json-server api.json -p 3333 -w -d 2000
\*\* Must be diferent port from the project!

- p = Port

- w = watch

- d 2000 = delay

will install 'json-server@0.17.1'

## Static Side Render

> run: npm run build to generate the statics page

> run: npm run start to run the project from build ..

## getStaticPaths()

PS: It´s not possible to generate Statics page from a dynamic page, ex: [id].tsx, where the id is dynamic.
In this case I will need to use a getStaticPaths() function, that will generate in the BUILD all pages från the project.
\*\* The PROBLEM is when you have a lot of pages and generate the build with all these pages. That will be too much!!

## API ROUTES

https://nextjs.org/docs/api-routes/introduction

## Dynamic Import

PS: Any libraries upload only when the application needs, doesn´t load in the start of project!

https://nextjs.org/docs/advanced-features/dynamic-import

using: calculo.tsx and Modal.tsx

# PRISMIC

https://prismic.io/dashboard

Install the package in my project to connect to Prismic:

> npm install @prismicio/client
