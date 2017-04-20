import { Meal } from "./Meal";
import { SeatReservation } from "./SeatReservation";

export class ReservationsViewModel {

    public availableMeals: KnockoutObservableArray<Meal>;
    public seats: KnockoutObservableArray<any>;
    public totalSurcharge: KnockoutComputed<any>;
    
    constructor(mappedMeals: any) {

        this.availableMeals = ko.observableArray([]);
        this.availableMeals(mappedMeals);

        // Editable data
        this.seats = ko.observableArray([
            new SeatReservation("Steve", this.availableMeals()[0]),
            new SeatReservation("Bert", this.availableMeals()[0])
        ]);

        // Computed data
        this.totalSurcharge = ko.computed(function () {
            var total = 0;
            for (var i = 0; i < this.seats().length; i++)
                total += this.seats()[i].meal().price();
            return total;
        });
    }

    public addSeat(): void {
        this.seats.push(new SeatReservation("", this.availableMeals()[0]));
    }

    public removeSeat(seat: any): void {
        this.seats.remove(seat);
    }
}
