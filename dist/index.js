import dotenv from 'dotenv';
import { createExpressServer } from 'routing-controllers';
import { HomeController } from './controller/home-controller.js';
import { SugarCollectorController } from './controller/sugar-colector-controller.js';
import { GetProductsController } from './controller/get-products-controller.js';
import { GetDishesController } from './controller/get-dishes-controller.js';
import { CreateProductController } from './controller/create-product-controller.js';
import { DeleteProductController } from './controller/delete-product-controller.js';
import { UpdateProductController } from './controller/update-product-controller.js';
import { UpdateDishController } from './controller/update-dish-controller.js';
import { CreateDishController } from './controller/create-dish-controller.js';
import { DeleteDishController } from './controller/delete-dish-controller.js';
dotenv.config();
const port = process.env.PORT;
// const app = express();
const app = createExpressServer({
    controllers: [
        SugarCollectorController,
        HomeController,
        GetProductsController,
        GetDishesController,
        CreateProductController,
        DeleteProductController,
        UpdateProductController,
        UpdateDishController,
        CreateDishController,
        DeleteDishController
    ],
    classTransformer: false,
    cors: true
});
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map