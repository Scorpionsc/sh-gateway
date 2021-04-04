var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Controller, Get } from 'routing-controllers';
import SugarCollector from '../services/SugarCollectorData.js';
let SugarCollectorController = class SugarCollectorController {
    get() {
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
};
__decorate([
    Get('/sugar-collector'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SugarCollectorController.prototype, "get", null);
SugarCollectorController = __decorate([
    Controller()
], SugarCollectorController);
export { SugarCollectorController };
//# sourceMappingURL=sugar-colector-controller.js.map