import './env';
import Server from './server';

const port = process.env.PORT || 4000;
Server.express.listen(port, () =>

  console.log(`🐈 Launched http://localhost:${port}/`),
);
