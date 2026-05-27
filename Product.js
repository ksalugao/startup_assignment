export default class Product {
    constructor(name, quantity, lead_time, average_sales) {
        this.name = name; 
        this.quantity = quantity;
        this.average_sales = average_sales;
        this.lead_time = lead_time;
    }

    getName() {
        return this.name;
    }

    getQuantity() {
        return this.quantity; 
    }

    addQuantity(quantity) {
        this.quantity += quantity;
    }

    getAverageSales() {
        return this.average_sales; 
    }

    calculateDaysRemaining() {
        return this.quantity / this.average_sales; 
    }

    needsReorder() {
        return this.calculateDaysRemaining() <= this.lead_time; 
    }

    calculateStatus() {
        return "healthy";
    }
}