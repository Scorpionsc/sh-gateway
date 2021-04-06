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
import SugarHunter from '../services/SugarHunter.js';
let GetFoodController = class GetFoodController {
    getFood() {
        const test = async () => {
            const sugarHunter = SugarHunter.instance;
            const products = await sugarHunter.getProducts();
            const dishes = await sugarHunter.getDishes();
            return {
                products,
                dishes
            };
        };
        return test();
    }
};
__decorate([
    Get('/food'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GetFoodController.prototype, "getFood", null);
GetFoodController = __decorate([
    Controller()
], GetFoodController);
export { GetFoodController };
//# sourceMappingURL=get-food-controller.js.map