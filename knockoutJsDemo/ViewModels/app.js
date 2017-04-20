"use strict";
var Meal_1 = require("./Meal");
var SeatReservation_1 = require("./SeatReservation");
var mappedMeals;
$(function () {
    loadData();
});
function loadData() {
    //$.isLoading({ text: "Loading..." });
    $.getJSON("/api/meals/getAllMeals", function (allData) {
        mappedMeals = $.map(allData, function (item) { return new Meal_1.Meal(item); });
    }).then(function () {
        // Bind the data when everything is ready
        ko.applyBindings(new ReservationsViewModel());
        //$.isLoading("hide");
    });
}
// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
    var self = this;
    self.availableMeals = ko.observableArray([]);
    self.availableMeals(mappedMeals);
    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation_1.SeatReservation("Steve", self.availableMeals()[0]),
        new SeatReservation_1.SeatReservation("Bert", self.availableMeals()[0])
    ]);
    // Computed data
    self.totalSurcharge = ko.computed(function () {
        var total = 0;
        for (var i = 0; i < self.seats().length; i++)
            total += self.seats()[i].meal().price();
        return total;
    });
    // Operations
    self.addSeat = function () {
        self.seats.push(new SeatReservation_1.SeatReservation("", self.availableMeals()[0]));
    };
    self.removeSeat = function (seat) { self.seats.remove(seat); };
}
//# sourceMappingURL=app.js.map