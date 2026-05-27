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

  needsReorder() {
    return this.calculateDaysRemaining() <= this.lead_time;
  }

  calculateDaysRemaining() {
    return Math.floor(this.quantity / this.average_sales);
  }

  calculateHealth() {
    const diff_days = this.calculateDaysRemaining() - this.lead_time;

    // if > lead_time, "HEALTHY"; if < lead_time && > (20% lead_time); if < (20% lead_time)
    if (diff_days > this.lead_time) {
      return "HEALTHY";
    } else if (diff_days < this.lead_time) {
      return "LOW";
    } else {
      return "CRITICAL";
    }
  }
}
