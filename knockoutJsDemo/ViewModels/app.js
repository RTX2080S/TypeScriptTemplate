"use strict";
var ReservationsViewModel_1 = require("./ReservationsViewModel");
var Meal_1 = require("./Meal");
var App = (function () {
    function App() {
        this.loadData();
    }
    App.prototype.loadData = function () {
        //$.isLoading({ text: "Loading..." });
        $.getJSON("/api/meals/getAllMeals", function (allData) {
            this.mappedMeals = $.map(allData, function (item) { return new Meal_1.Meal(item); });
        }).then(function () {
            // Bind the data when everything is ready
            ko.applyBindings(new ReservationsViewModel_1.ReservationsViewModel(this.mappedMeals));
            //$.isLoading("hide");
        });
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map