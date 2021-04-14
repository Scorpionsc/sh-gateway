import 'reflect-metadata';
import { Body, Controller, Put } from 'routing-controllers';
import SugarHunter from '../services/SugarHunter.js';

@Controller()
export class UpdateDishController {
    @Put('/update-dish')
  save (@Body() body:any) {
    const send = async () => {
      const sugarHunter = SugarHunter.instance;

      return await sugarHunter.updateDish(body);
    };

    return send();
  }
}
