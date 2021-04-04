import { Controller, Get } from 'routing-controllers';
import SugarCollector from '../services/SugarCollectorData.js';

@Controller()
export class HomeController {
    @Get('/')
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
