import { Controller, Get } from 'routing-controllers';
import SugarHunter from '../services/SugarHunter.js';

@Controller()
export class GetFoodController {
    @Get('/food')
  getFood () {
    const test = async () => {
      const sugarHunter = SugarHunter.instance;

      const products = await sugarHunter.getProducts();
      const dishes = await sugarHunter.getDishes();

      return {
        products,
        dishes
      };
    };

    return test();
  }
}
