import express from 'express';
import { subscriptions } from '../data/seed.js';


const router = express.Router();


router.get('/', (req, res) => {
const { status } = req.query;
const data = status ? subscriptions.filter(s => s.status===status) : subscriptions;
res.json({ count: data.length, data });
});


export default router;