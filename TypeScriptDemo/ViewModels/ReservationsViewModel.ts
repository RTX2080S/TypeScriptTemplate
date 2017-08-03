import { Meal } from "./Meal";
import { SeatReservation } from "./SeatReservation";

export class ReservationsViewModel {

    public availableMeals: KnockoutObservableArray<Meal>;
    public seats: KnockoutObservableArray<SeatReservation>;
    public totalSurcharge: KnockoutComputed<any>;

    constructor(mappedMeals: any) {
        this.availableMeals = ko.observableArray([]);
        this.availableMeals(mappedMeals);

        // Load data
        this.load();
    }

    public load = (): void => {
        // Editable data
        this.seats = ko.observableArray([
            new SeatReservation("Steve", this.availableMeals()[0]),
            new SeatReservation("Bert", this.availableMeals()[0])
        ]);

        var self = this;

        // Computed data
        this.totalSurcharge = ko.computed(function () {
            var total = 0;
            for (var i = 0; i < self.seats().length; i++)
                total += self.seats()[i].meal().price();
            return total;
        });
    }

    public addSeat = (): void => {
        this.seats.push(new SeatReservation("", this.availableMeals()[0]));
    }

    public removeSeat = (seat: SeatReservation): void => {
        this.seats.remove(seat);
    }
}
