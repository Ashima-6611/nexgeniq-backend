import express, { Express } from 'express';
import router from "./controllers/auth.routes";
import cors from 'cors';
import { json } from 'body-parser';

const app: Express = express();
app.use(
    cors({
        origin: '*'
    }),
);
app.use(json());
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World');
});

export default app;
if (process.env.NODE_ENV !== 'production') { const port = process.env.PORT || 8000; app.listen(port, () => console.log('Server running on port ' + port)); }
