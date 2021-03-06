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
var students_data_file_service_1 = require('../services/students-data-file.service');
var StudentsComponent = (function () {
    function StudentsComponent(studentDataService) {
        this.studentDataService = studentDataService;
    }
    StudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentDataService.getStudentsData().subscribe(function (data) { return _this.students = data; }, function (error) { return alert("Error is: " + error); }, function () { return console.log("finished"); });
    };
    StudentsComponent.prototype.averageGpa = function () {
        var sum = 0;
        if (Array.isArray(this.students)) {
            for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
                var student = _a[_i];
                sum += student.gpa;
            }
            return sum / this.students.length;
        }
        else {
            return 0.0;
        }
    };
    StudentsComponent.prototype.upQuantity = function (student) {
        student.penAmount++;
    };
    StudentsComponent.prototype.downQuantity = function (student) {
        student.penAmount--;
        if (student.penAmount < 0) {
            student.penAmount = 0;
        }
    };
    StudentsComponent.prototype.getCoord = function (event) {
        console.log(event.clientX + ", " + event.clientY);
    };
    StudentsComponent = __decorate([
        core_1.Component({
            selector: 'students',
            templateUrl: 'app/students/students.component.html',
            styleUrls: ['app/students/students.component.css']
        }), 
        __metadata('design:paramtypes', [students_data_file_service_1.StudentDataFileService])
    ], StudentsComponent);
    return StudentsComponent;
}());
exports.StudentsComponent = StudentsComponent;
//# sourceMappingURL=students.component.js.map