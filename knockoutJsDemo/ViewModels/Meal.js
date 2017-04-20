"use strict";
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
//# sourceMappingURL=Meal.js.map