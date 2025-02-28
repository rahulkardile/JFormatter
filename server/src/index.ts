import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running at \n\x1b[34mhttp://localhost:${port}\x1b[0m`);
});