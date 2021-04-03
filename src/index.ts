import dotenv from 'dotenv';
import { createExpressServer } from 'routing-controllers';
import { UserController } from './controller/user-controller';

dotenv.config();

const port = process.env.PORT || 5000;

const app = createExpressServer({
  controllers: [UserController]
});

app.listen(port, () => console.log(`Running on port ${port}`));
