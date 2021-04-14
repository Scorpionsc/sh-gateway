import 'reflect-metadata';
import { Body, Controller, Delete } from 'routing-controllers';
import SugarHunter from '../services/SugarHunter.js';

@Controller()
export class DeleteDishController {
    @Delete('/delete-dish')
  save (@Body() body:any) {
    const send = async () => {
      const sugarHunter = SugarHunter.instance;
      return await sugarHunter.deleteDish(body.toString());
    };

    return send();
  }
}
