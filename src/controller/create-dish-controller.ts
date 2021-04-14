import 'reflect-metadata';
import { Body, Controller, Post } from 'routing-controllers';
import SugarHunter from '../services/SugarHunter.js';

@Controller()
export class CreateDishController {
    @Post('/create-dish')
  save (@Body() body:any) {
    const send = async () => {
      const sugarHunter = SugarHunter.instance;

      return await sugarHunter.createDish(body);
    };

    return send();
  }
}
