
var mappedMeals;

$(function () {
    loadData();
});

function loadData() {
    $.isLoading({ text: "Loading..." });
    $.getJSON("/api/meals/getAllMeals", function (allData) {
        mappedMeals = $.map(allData, function (item) { return new Meal(item) });
    }).then(function () {
        // Bind the data when everything is ready
        ko.applyBindings(new ReservationsViewModel());
        $.isLoading("hide");
    });
}

// Class to represent a row in the seat reservations grid
function SeatReservation(name, initialMeal) {
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);

    self.formattedPrice = ko.computed(function () {
        var price = self.meal().price();
        return price ? "$" + price.toFixed(2) : "None";
    });
}

function Meal(data) {
    var self = this;
    self.id = ko.observable(data.Id);
    self.name = ko.observable(data.Name);
    self.price = ko.observable(data.Price);
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
    var self = this;

    self.availableMeals = ko.observableArray([]);
    self.availableMeals(mappedMeals);

    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation("Steve", self.availableMeals()[0]),
        new SeatReservation("Bert", self.availableMeals()[0])
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
        self.seats.push(new SeatReservation("", self.availableMeals()[0]));
    }
    self.removeSeat = function (seat) { self.seats.remove(seat) }

}
