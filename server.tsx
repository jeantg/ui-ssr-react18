import compress from 'compression';
import express, { Response } from 'express';
import ReactDOMServer from 'react-dom/server';
import App from './src/App';
import { DataProvider } from './src/context';
import { getData } from './src/data';

const PORT = process.env.PORT || 3000;
const app = express();
const createServerData = () => {
  let done = false;
  let promise = null;
  return {
    read() {
      if (done) {
        return;
      }
      if (promise) {
        throw promise;
      }
      promise = new Promise((resolve) => {
        getData().then((data) => {
          done = true;
          promise = null;
          resolve(data);
        });
      });
      throw promise;
    },
  };
};
const render = async (ctx: Response, url = '') => {
  let didError = false;
  const data = createServerData();
  const stream = ReactDOMServer.renderToPipeableStream(
    <DataProvider data={data}>
      <App />
    </DataProvider>,
    {
      bootstrapScripts: ['/main.js'],
      onShellReady() {
        ctx.statusCode = didError ? 500 : 200;
        ctx.setHeader('Content-type', 'text/html');
        stream.pipe(ctx);
      },
      onError(error) {
        console.error(error);
        didError = true;
      },
    },
  );
  setTimeout(() => {
    stream.abort();
  }, 10000);
};

app.get('/', (req, res) => render(res));
app.use(compress());
app.use(express.static('build'));
app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`server is running at http://localhost:${PORT}`),
);
