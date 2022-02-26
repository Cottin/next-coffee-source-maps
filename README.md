Demonstrating that `defaultLoaders.babel` doesn't handle source maps from previous loader in chain.

0. `npm install`
1. `npm run dev`
2. See error popup on site in localhost:3000 pointing to `pages/index.coffee (1:0)``
3. Comment out `defaultLoaders.babel` in `next.config.js` and comment in `{loader: 'babel-loader'}`
4. See error popup on site in localhost:3000 pointing to `pages/index.coffee (6:2)` (ie. the correct line in the coffee file)
