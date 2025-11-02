import express from 'express';


// BigCommerce-like webhook stubs
// Wire this endpoint in BC admin -> Webhooks: order/created


const router = express.Router();


router.post('/bigcommerce/order-created', (req, res) => {
// TODO: verify HMAC signature from BC before trusting payload
// Example shape: { id, customer_id, items: [{ sku, qty, price }], total, tax, created_at }
console.log('🛰️ BigCommerce order webhook received', req.body?.id || '(no id)');


// Here: persist to DB, enrich, recalc metrics, fan-out to Salesforce/QuickBooks/etc.


res.status(202).json({ ok: true });
});


router.post('/paypal/payment-completed', (req, res) => {
console.log('💳 PayPal payment event');
res.status(202).json({ ok: true });
});


router.post('/avalara/tax-calc', (req, res) => {
console.log('🧾 Avalara tax calc event');
res.status(202).json({ ok: true });
});


export default router;