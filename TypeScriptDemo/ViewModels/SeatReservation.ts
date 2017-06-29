import { Meal } from "./Meal";

export class SeatReservation {

    public name: string;
    public meal: KnockoutObservable<Meal>;
    public formattedPrice: KnockoutComputed<any>;

    constructor(name: string, initialMeal: Meal) {
        var self = this;
        self.name = name;
        self.meal = ko.observable(initialMeal);

        self.formattedPrice = ko.computed(function () {
            var price = self.meal().price();
            return price ? "$" + price.toFixed(2) : "None";
        });
    }
}
