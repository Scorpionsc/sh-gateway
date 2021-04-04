import dotenv from 'dotenv';
import { createExpressServer } from 'routing-controllers';
import { HomeController } from './controller/home-controller.js';
dotenv.config();
const port = process.env.PORT;
const app = createExpressServer({
    controllers: [HomeController]
});
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map