import dotenv from 'dotenv';
import { createExpressServer } from 'routing-controllers';
import { HomeController } from './controller/home-controller.js';
import { SugarCollectorController } from './controller/sugar-colector-controller.js';
import { GetFoodController } from './controller/get-food-controller.js';

dotenv.config();

const port = process.env.PORT;
// const app = express();
const app = createExpressServer({
  controllers: [SugarCollectorController, HomeController, GetFoodController],
  cors: true
});

app.listen(port, () => console.log(`Running on port ${port}`));
