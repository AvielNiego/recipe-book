var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostBinding, HostListener } from '@angular/core';
export var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    Object.defineProperty(DropdownDirective.prototype, "opened", {
        get: function () {
            return this.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    DropdownDirective.prototype.open = function () {
        this.isOpen = true;
    };
    DropdownDirective.prototype.close = function () {
        this.isOpen = false;
    };
    __decorate([
        HostBinding('class.open'), 
        __metadata('design:type', Object)
    ], DropdownDirective.prototype, "opened", null);
    __decorate([
        HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], DropdownDirective.prototype, "open", null);
    __decorate([
        HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], DropdownDirective.prototype, "close", null);
    DropdownDirective = __decorate([
        Directive({
            selector: '[rbDropdown]'
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownDirective);
    return DropdownDirective;
}());
//# sourceMappingURL=C:/Develop/AngularPractice/recipe-book/src/app/dropdown.directive.js.map