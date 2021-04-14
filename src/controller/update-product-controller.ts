import 'reflect-metadata';
import { Body, Controller, Put } from 'routing-controllers';
import SugarHunter from '../services/SugarHunter.js';

@Controller()
export class UpdateProductController {
    @Put('/update-product')
  save (@Body() body:any) {
    const send = async () => {
      const sugarHunter = SugarHunter.instance;

      return await sugarHunter.updateProduct(body);
    };

    return send();
  }
}
