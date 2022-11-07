import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
const isProduction = process.env.NODE_ENV === 'production';
const rimraf = require('rimraf');
rimraf.sync(path.resolve(__dirname, './build/*.{js,js.map}'));
webpack(
  {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      chunkFilename: '[fullhash].js',
      publicPath: '/',
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public'),
            to: '.',
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,

          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
                '@babel/preset-typescript',
              ],
            },
          },
        },
      ],
    },

    resolve: {
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
      fallback: {
        stream: false,
      },
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
    },
  },
  (err: any, stats: any) => {
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      process.exit(1);
      return;
    }
    const info = stats?.toJson();
    if (stats?.hasErrors()) {
      console.log('Finished running webpack with errors.');
      info?.errors?.forEach((e: string) => console.error(e));
      process.exit(1);
    } else {
      console.log('Finished running webpack.');
    }
  },
);
