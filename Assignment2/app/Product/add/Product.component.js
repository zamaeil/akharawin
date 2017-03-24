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
var Product_1 = require('../Product');
var product_data_service_1 = require('../../services/product-data.service');
var ProductComponent = (function () {
    //productArr: Product[];
    function ProductComponent(productDataService) {
        this.productDataService = productDataService;
        this.products = new Product_1.Product();
    }
    // ngOnInit() {
    //     console.log(this.products);
    // }
    ProductComponent.prototype.addProduct = function (productImage) {
        if (productImage.length === 0) {
            this.products.image = "no picture";
        }
        else {
            this.products.image = productImage[0].name;
        }
        this.productDataService.addProduct(this.products);
        alert("the product is successfully added \n" +
            "id:" + this.products.id + "\n" +
            "name:" + this.products.name + "\n" +
            "description:" + this.products.description + "\n" +
            "image:" + this.products.image + "\n" +
            "price:" + this.products.price + "\n" +
            "amount:" + this.products.amount + "\n" +
            "rate:" + this.products.rate + "\n");
    };
    ProductComponent.prototype.resetProduct = function () {
        this.products.id = null;
        this.products.name = "";
        this.products.description = "";
        this.products.image = "";
        this.products.price = null;
        this.products.amount = null;
        this.products.rate = null;
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'addinfo',
            templateUrl: 'app/Product/add/Product.component.html',
        }), 
        __metadata('design:paramtypes', [product_data_service_1.ProductDataService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=Product.component.js.map