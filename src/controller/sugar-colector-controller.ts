import { Controller, Get } from 'routing-controllers';
import SugarCollector from '../services/SugarCollector.js';

@Controller()
export class SugarCollectorController {
    @Get('/sugar-collector')
  get () {
    const test = async () => {
      const sugarCollector = SugarCollector.instance;
      const lastEntry = await sugarCollector.getLastEntry();

      const loopData = await sugarCollector.getLoopData();
      return {
        lastEntry,
        loopData
      };
    };

    return test();
  }
}
