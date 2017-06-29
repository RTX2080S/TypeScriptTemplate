import { Meal } from "./Meal";
export declare class ReservationsViewModel {
    availableMeals: KnockoutObservableArray<Meal>;
    seats: KnockoutObservableArray<any>;
    totalSurcharge: KnockoutComputed<any>;
    constructor(mappedMeals: any);
    addSeat(): void;
    removeSeat(seat: any): void;
}
