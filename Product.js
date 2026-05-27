export default class Product {
  constructor(name, quantity, lead_time, average_sales) {
    this.name = name;
    this.quantity = quantity;
    this.lead_time = lead_time;
    this.average_sales = average_sales;
    this.status = "HEALTHY";
  }

  getQuantity() {
    return this.quantity;
  }
  addQuantity(quantity) {
    this.quantity += quantity;
    this.calculateReorder();
  }
  calculateDaysRemaining() {
    return Math.floor(this.quantity / this.average_sales);
  }
  calculateStatus() {
    const diff_days = this.calculateDaysRemaining() - this.lead_time;

    // if > lead_time, "HEALTHY"; if < lead_time && > (20% lead_time); if < (20% lead_time)
    if (diff_days > this.lead_time) {
      this.status = "HEALTHY";
    } else if (diff_days < this.lead_time) {
      this.status = "LOW";
    } else {
      this.status = "CRITICAL";
    }
  }
}
