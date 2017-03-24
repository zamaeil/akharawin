"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_data_service_1 = require('../../services/product-data.service');
var infoListComponent = (function () {
    function infoListComponent(productDataService) {
        this.productDataService = productDataService;
        this.products = [];
    }
    infoListComponent.prototype.ngOnInit = function () {
        this.products = this.productDataService.getAllProduct();
    };
    infoListComponent.prototype.checkString = function (product) {
        if (product.description.length < 50) {
            return product.description;
        }
        else {
            return product.description.substring(0, 46) + "...";
        }
    };
    infoListComponent.prototype.showInfo = function (product) {
        alert("product's information: \n" +
            "id: " + product.id + "\n" +
            "name: " + product.name + "\n" +
            "description: " + product.description + "\n" +
            "image: " + product.image + "\n" +
            "price: " + product.price + "\n" +
            "amount: " + product.amount + "\n" +
            "rate: " + product.rate + "\n");
    };
    infoListComponent = __decorate([
        core_1.Component({
            selector: 'showInfoList',
            templateUrl: 'app/Product/infoList/infoList.component.html',
            styleUrls: ['app/Product/infoList/infoList.component.css']
        }), 
        __metadata('design:paramtypes', [product_data_service_1.ProductDataService])
    ], infoListComponent);
    return infoListComponent;
}());
exports.infoListComponent = infoListComponent;
//# sourceMappingURL=infoList.component.js.map