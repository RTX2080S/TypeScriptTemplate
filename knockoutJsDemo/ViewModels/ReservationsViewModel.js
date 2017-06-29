define(["require", "exports", "./SeatReservation"], function (require, exports, SeatReservation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReservationsViewModel = (function () {
        function ReservationsViewModel(mappedMeals) {
            var _this = this;
            this.addSeat = function () {
                _this.seats.push(new SeatReservation_1.SeatReservation("", _this.availableMeals()[0]));
            };
            this.removeSeat = function (seat) {
                _this.seats.remove(seat);
            };
            var self = this;
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
                for (var i = 0; i < self.seats().length; i++)
                    total += self.seats()[i].meal().price();
                return total;
            });
        }
        return ReservationsViewModel;
    }());
    exports.ReservationsViewModel = ReservationsViewModel;
});
