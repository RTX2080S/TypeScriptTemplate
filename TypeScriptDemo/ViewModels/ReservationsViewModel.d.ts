import { Meal } from "./Meal";
import { SeatReservation } from "./SeatReservation";
export declare class ReservationsViewModel {
    availableMeals: KnockoutObservableArray<Meal>;
    seats: KnockoutObservableArray<SeatReservation>;
    totalSurcharge: KnockoutComputed<any>;
    constructor(mappedMeals: any);
    addSeat: () => void;
    removeSeat: (seat: SeatReservation) => void;
}
