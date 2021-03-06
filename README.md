This is a sample project to demonstrate how to integrate Facebook Pixel functionality into React applications using Context and Hooks.

It was built using [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started

** You MUST HAVE to know how Facebook Pixel works and how to test a pixel event on facebook business dashboard, because it`s out of scope explaining the concepts behing that **


First, run the development server:

- copy the file .env.template to .env.local and set NEXT_PUBLIC_FACEBOOK_PIXEL_ID key with your pixel id code

```bash
npm run dev
# or
yarn dev
```

1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

2. Check if a PageView event was generated at your facebook pixel test dashboard

3. Click on "Facebook Sample" card on the page

4. Check if a ViewContent event was generated at your facebook pixel test dashboard


## Learn More

To learn more about Next.js, take a look at the following resources:

- [React Facebook Pixel](https://github.com/zsajjad/react-facebook-pixel) - React Facebook Pixel library
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Contributing
 
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D3


## Credits
 
Developer - Paulo Rodrigues (@paulorodriguesxv)

## License
 
The MIT License (MIT)

Copyright (c) 2021 Paulo Rodrigues

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
