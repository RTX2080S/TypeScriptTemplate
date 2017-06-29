define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SeatReservation = (function () {
        function SeatReservation(name, initialMeal) {
            var self = this;
            self.name = name;
            self.meal = ko.observable(initialMeal);
            self.formattedPrice = ko.computed(function () {
                var price = self.meal().price();
                return price ? "$" + price.toFixed(2) : "None";
            });
        }
        return SeatReservation;
    }());
    exports.SeatReservation = SeatReservation;
});
