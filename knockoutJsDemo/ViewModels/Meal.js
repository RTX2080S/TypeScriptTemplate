define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Meal = (function () {
        function Meal(data) {
            var self = this;
            self.id = ko.observable(data.Id);
            self.mealName = ko.observable(data.Name);
            self.price = ko.observable(data.Price);
        }
        return Meal;
    }());
    exports.Meal = Meal;
});
