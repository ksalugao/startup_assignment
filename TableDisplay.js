import Inventory from "./Inventory.js";
import Product from "./Product.js";

const inventory = new Inventory();
const productForm = document.getElementById("product-form");
const inventoryTableBody = document.getElementById("inventory-table-body");

function formatDaysRemaining(daysRemaining) {
    if (!Number.isFinite(daysRemaining)) {
        return "No stockout expected"; // ex. if average daily sales is 0
    }

    return `${daysRemaining.toFixed(1)} days`;
}

function createTableCell(text, className = "") {
    const cell = document.createElement("td");
    cell.textContent = text;

    if (className) {
        cell.className = className;
    }

    return cell;
}

function renderEmptyTableMessage() {
    inventoryTableBody.replaceChildren();

    const row = document.createElement("tr");
    const cell = createTableCell("No products added yet.");
    cell.colSpan = 4;
    row.appendChild(cell);
    inventoryTableBody.appendChild(row);
}

function renderInventoryTable() {
    const products = inventory.getProducts();
    inventoryTableBody.replaceChildren();

    if (products.length === 0) {
        renderEmptyTableMessage();
        return;
    }

    products.forEach(product => {
        const row = document.createElement("tr");

        row.appendChild(createTableCell(product.getName()));
        row.appendChild(createTableCell(formatDaysRemaining(product.calculateDaysRemaining())));
        row.appendChild(createTableCell(product.needsReorder() ? "Reorder now" : "No warning"));
        row.appendChild(createTableCell(product.calculateHealth()));
        row.appendChild(createTableCell(product.getQuantity()));
        
        inventoryTableBody.appendChild(row);
    });
}

productForm.addEventListener("submit", event => {
    event.preventDefault();

    const product = new Product(
        productForm.elements.name.value,
        Number(productForm.elements.quantity.value),
        Number(productForm.elements.days.value),
        Number(productForm.elements.sales.value)
    );

    inventory.addProduct(product);
    renderInventoryTable();
    productForm.reset();
});
