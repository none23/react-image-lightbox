const path = require('path')
const webpack = require('webpack')

module.exports = {
  bail: true
, devtool: 'source-map'
, entry: {
    'react-image-lightbox': './src/index'
  }
, output: {
    path: path.join(__dirname, 'dist', 'umd')
  , filename: '[name].js'
  , library: 'ReactImageLightbox'
  , libraryTarget: 'umd'
  }
, resolve: {
    modules: [
      path.join(__dirname, 'src')
    , path.join(__dirname, 'node_modules')
    ]
  , extensions: ['.js', '.json']
  }
, plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  , new webpack.optimize.UglifyJsPlugin({
      compress: { screw_ie8: true }
    , mangle: { screw_ie8: true }
    , output: { screw_ie8: true }
    })
  ]
, externals: {
    'react': 'react'
  , 'react-dom': 'react-dom'
  , 'react-modal': 'react-modal'
  }
, module: {
    rules: [
      { test: /\.js$/
      , enforce: 'pre'
      , include: path.join(__dirname, 'src')
      , use: [
          { loader: 'eslint-loader'
          , options: {
              fix: true
            }
          }
        ]
      }

    , { test: /\.js$/
      , include: path.join(__dirname, 'src')
      , loader: 'babel-loader'
      }

    , { test: /\.(sss|css)$/
      , include: path.join(__dirname, 'src')
      , use: [
          'style-loader'
        , { loader: 'css-loader'
          , options: {
              importLoaders: 1
            , modules: true
            , localIdentName: '[name]__[hash:base64:5]'
            , minimize: true
            , sourceMap: true
            }
          }
        , { loader: 'postcss-loader'
          , options: {
              parser: 'sugarss'
            , plugins: () => [
                require('precss')
              , require('postcss-import')
              , require('postcss-cssnext')
              , require('postcss-calc')
              , require('postcss-csso')
              ]
            }
          }
        ]
      }
    ]
  }
}
