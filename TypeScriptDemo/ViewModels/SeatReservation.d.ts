import { Meal } from "./Meal";
export declare class SeatReservation {
    name: string;
    meal: KnockoutObservable<Meal>;
    formattedPrice: KnockoutComputed<any>;
    constructor(name: string, initialMeal: Meal);
}
