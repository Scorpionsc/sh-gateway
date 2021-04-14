var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import 'reflect-metadata';
import { Body, Controller, Delete } from 'routing-controllers';
import SugarHunter from '../services/SugarHunter.js';
let DeleteDishController = class DeleteDishController {
    save(body) {
        const send = async () => {
            const sugarHunter = SugarHunter.instance;
            return await sugarHunter.deleteDish(body.toString());
        };
        return send();
    }
};
__decorate([
    Delete('/delete-dish'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DeleteDishController.prototype, "save", null);
DeleteDishController = __decorate([
    Controller()
], DeleteDishController);
export { DeleteDishController };
//# sourceMappingURL=delete-dish-controller.js.map