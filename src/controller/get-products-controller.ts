import { Controller, Get } from 'routing-controllers';
import SugarHunter from '../services/SugarHunter.js';

@Controller()
export class GetProductsController {
    @Get('/products')
  getFood () {
    const test = async () => {
      const sugarHunter = SugarHunter.instance;

      return await sugarHunter.getProducts();
    };

    return test();
  }
}
