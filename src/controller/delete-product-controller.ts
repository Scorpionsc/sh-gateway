import 'reflect-metadata';
import { Body, Controller, Delete } from 'routing-controllers';
import SugarHunter from '../services/SugarHunter.js';

@Controller()
export class DeleteProductController {
    @Delete('/delete-product')
  save (@Body() body:any) {
    const send = async () => {
      const sugarHunter = SugarHunter.instance;
      return await sugarHunter.deleteProduct(body.toString());
    };

    return send();
  }
}
