/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        createjs: 'createjs/builds/1.0.0/createjs.js',
      },
    },
    module: {
      rules: [
        {
          test: /node_modules[/\\]createjs/,
          loaders: [
            'imports-loader?window=window-or-global,this=>window',
            'exports-loader?this.createjs',
          ],
        },
      ],
    },
  })
}

// Like gatsby-plugin-react-css-modules but not broken
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `babel-plugin-react-css-modules`,
    options: {
      generateScopedName: `[name]--[local]--[hash:base64:5]`,
      webpackHotModuleReloading: process.env.NODE_ENV !== `production`,
      filetypes: {
        '.scss': {
          syntax: `postcss-scss`,
        },
      },
    },
  })
}
