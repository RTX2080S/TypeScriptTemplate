"use strict";
var SeatReservation_1 = require("./SeatReservation");
var ReservationsViewModel = (function () {
    function ReservationsViewModel(mappedMeals) {
        this.availableMeals = ko.observableArray([]);
        this.availableMeals(mappedMeals);
        // Editable data
        this.seats = ko.observableArray([
            new SeatReservation_1.SeatReservation("Steve", this.availableMeals()[0]),
            new SeatReservation_1.SeatReservation("Bert", this.availableMeals()[0])
        ]);
        // Computed data
        this.totalSurcharge = ko.computed(function () {
            var total = 0;
            for (var i = 0; i < this.seats().length; i++)
                total += this.seats()[i].meal().price();
            return total;
        });
    }
    ReservationsViewModel.prototype.addSeat = function () {
        this.seats.push(new SeatReservation_1.SeatReservation("", this.availableMeals()[0]));
    };
    ReservationsViewModel.prototype.removeSeat = function (seat) {
        this.seats.remove(seat);
    };
    return ReservationsViewModel;
}());
exports.ReservationsViewModel = ReservationsViewModel;
//# sourceMappingURL=ReservationsViewModel.js.map