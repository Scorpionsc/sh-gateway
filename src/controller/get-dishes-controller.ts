import { Controller, Get } from 'routing-controllers';
import SugarHunter from '../services/SugarHunter.js';

@Controller()
export class GetDishesController {
    @Get('/dishes')
  getFood () {
    const test = async () => {
      const sugarHunter = SugarHunter.instance;

      return await sugarHunter.getDishes();
    };

    return test();
  }
}
