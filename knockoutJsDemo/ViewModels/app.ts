import { SeatReservation } from "./SeatReservation";
import { ReservationsViewModel } from "./ReservationsViewModel";
import { Meal } from "./Meal";

export class App {

    private mappedMeals: any;

    constructor() {
        this.loadData();
    }

    private loadData() {
        //$.isLoading({ text: "Loading..." });
        $.getJSON("/api/meals/getAllMeals", function (allData) {
            this.mappedMeals = $.map(allData, function (item) { return new Meal(item) });
        }).then(function () {
            // Bind the data when everything is ready
            ko.applyBindings(new ReservationsViewModel(this.mappedMeals));
            //$.isLoading("hide");
        });
    }
}
