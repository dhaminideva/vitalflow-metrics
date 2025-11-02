import express from 'express';
import { orders, subscriptions, products } from '../data/seed.js';
import { groupBy, sum } from '../data/utils.js';


const router = express.Router();


router.get('/', (req, res) => {
// Revenue & orders
const revenue = +(sum(orders.map(o => o.total))).toFixed(2);
const orderCount = orders.length;
const aov = +(revenue / orderCount).toFixed(2);


// Product mix
const mix = Object.entries(groupBy(orders.flatMap(o => o.items), 'sku')).map(([sku, items]) => ({
sku,
units: sum(items.map(i => i.qty)),
revenue: +sum(items.map(i => i.qty * i.price)).toFixed(2)
})).sort((a,b)=>b.revenue-a.revenue);


// Subscriptions
const activeSubs = subscriptions.filter(s => s.status==='active');
const mrr = +sum(activeSubs.map(s => s.mrr)).toFixed(2);
const arr = +(mrr * 12).toFixed(2);


// Churn (very simple monthly logo churn approximation)
const cancelledLast30 = subscriptions.filter(s => s.cancelledAt);
const churnRate = +(cancelledLast30.length / (activeSubs.length + cancelledLast30.length)).toFixed(3);


// Cohorts by month started
const cohort = Object.entries(groupBy(subscriptions, s => (s.startedAt||'').slice(0,7)))
.map(([month, subs]) => ({ month, count: subs.length }))
.sort((a,b)=>a.month.localeCompare(b.month));


res.json({
summary: { revenue, orders: orderCount, aov, mrr, arr, churnRate },
mix,
cohort,
products
});
});


export default router;