import dotenv from 'dotenv';
import { createExpressServer } from 'routing-controllers';
import { UserController } from './controller/user-controller';
import { HomeController } from './controller/home-controller';

dotenv.config();

const port = process.env.PORT;

const app = createExpressServer({
  controllers: [UserController, HomeController]
});

app.listen(port, () => console.log(`Running on port ${port}`));
