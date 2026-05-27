export default class Product {
    constructor(name, quantity, lead_time, average_sales) {
        this.name = name; 
        this.quantity = quantity; 
        this.lead_time = lead_time; 
        this.average_sales = average_sales; // CONST 
        this.reorder = 0; // 1 "reorder" : 0 "does not need reorder"
    }

    getAvergaeSales() {
        return this.average_sales; 
    }

    getQuantity() {
        return this.quantity; 
    }

    addQuantity(quantity) {
        this.quantity += quantity;  
    }

    calculateDaysRemaining() {
        return this.quantity / average_sales; 
    }
    getStatus() {
        return this.reorder; 
    }
    calculateStatus() {
        this.reorder = this.calculateDaysRemaining() <= this.lead_time; 
    }
}