import { v4 as uuid } from 'uuid';
import { startOfMonth, addDays, formatISO } from './utils.js';


// Products: mainstream health, not eye-specific
export const products = [
{ id: 'p1', sku: 'SLEEP-30', name: 'Deep Sleep Complex 30ct', price: 24.99, category: 'Sleep' },
{ id: 'p2', sku: 'JOINT-60', name: 'Joint Relief Plus 60ct', price: 39.99, category: 'Joint' },
{ id: 'p3', sku: 'IMMUNE-30', name: 'Immune Guard 30ct', price: 29.99, category: 'Immunity' }
];


// Helper to create a date series for last 90 days
function daysBack(n) {
const arr = [];
for (let i = n; i >= 0; i--) arr.push(addDays(new Date(), -i));
return arr;
}


// Random-ish seed for demo repeatability
function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }


export const customers = Array.from({ length: 140 }, (_, i) => ({
id: `c${i+1}`,
email: `user${i+1}@example.com`,
createdAt: formatISO(addDays(startOfMonth(new Date()), -rand(0, 120)))
}));


// Subscriptions: some active, some cancelled
export const subscriptions = customers.slice(0, 90).map((c, i) => ({
id: `s${i+1}`,
customerId: c.id,
sku: ['SLEEP-30','JOINT-60','IMMUNE-30'][i % 3],
interval: 'monthly',
status: Math.random() < 0.82 ? 'active' : 'cancelled',
startedAt: formatISO(addDays(new Date(), -rand(10, 240))),
cancelledAt: Math.random() < 0.18 ? formatISO(addDays(new Date(), -rand(1, 90))) : null,
mrr: [24.99,39.99,29.99][i % 3]
}));


// Orders last 90 days
const dates = daysBack(90);
export const orders = dates.flatMap(d => {
const count = rand(6, 22);
return Array.from({ length: count }, () => {
const prod = products[rand(0, products.length-1)];
const qty = rand(1, 3);
return {
id: uuid(),
date: formatISO(d),
customerId: customers[rand(0, customers.length-1)].id,
items: [{ sku: prod.sku, price: prod.price, qty }],
total: +(prod.price * qty).toFixed(2),
paymentStatus: 'paid',
channel: Math.random()<0.75 ? 'web' : 'amazon'
};
});
});