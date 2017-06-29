import { SeatReservation } from "./SeatReservation";
import { ReservationsViewModel } from "./ReservationsViewModel";
import { Meal } from "./Meal";

export class App {

    private mappedMeals: any;

    constructor() {
        this.loadData();
    }

    private loadData = () => {
        let self = this;
        $.getJSON("/api/meals/getAllMeals", function (allData) {
            self.mappedMeals = $.map(allData, function (item) { return new Meal(item) });
        }).then(function () {
            // Bind the data when everything is ready
            ko.applyBindings(new ReservationsViewModel(self.mappedMeals));
        });
    }
}
