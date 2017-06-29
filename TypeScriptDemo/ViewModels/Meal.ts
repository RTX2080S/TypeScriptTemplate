
export class Meal {

    public id: KnockoutObservable<number>;
    public mealName: KnockoutObservable<string>;
    public price: KnockoutObservable<any>;

    constructor(data: any) {
        var self = this;
        self.id = ko.observable(data.Id);
        self.mealName = ko.observable(data.Name);
        self.price = ko.observable(data.Price);
    }
}
