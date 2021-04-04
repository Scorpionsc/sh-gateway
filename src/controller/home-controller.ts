import { Controller, Get } from 'routing-controllers';

@Controller()
export class HomeController {
    @Get('/')
  get () {
    return 'API works';
  }
}
