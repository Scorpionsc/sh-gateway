import 'reflect-metadata';
import { Body, Controller, Post } from 'routing-controllers';
import SugarHunter from '../services/SugarHunter.js';

@Controller()
export class CreateProductController {
    @Post('/create-product')
  save (@Body() body:any) {
    const send = async () => {
      const sugarHunter = SugarHunter.instance;

      return await sugarHunter.createProduct(body);
    };

    return send();
  }
}
