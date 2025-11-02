async function fetchJSON(url) { const r = await fetch(url); if(!r.ok) throw new Error('HTTP '+r.status); return r.json(); }
function fmtCurrency(n){ return n.toLocaleString(undefined,{ style:'currency', currency:'USD' }); }


(async () => {
const data = await fetchJSON('/api/metrics');
const { summary, mix, cohort } = data;


// KPIs
document.getElementById('rev').textContent = fmtCurrency(summary.revenue);
document.getElementById('orders').textContent = summary.orders;
document.getElementById('aov').textContent = fmtCurrency(summary.aov);
document.getElementById('mrr').textContent = fmtCurrency(summary.mrr);
document.getElementById('arr').textContent = fmtCurrency(summary.arr);
document.getElementById('churn').textContent = (summary.churnRate*100).toFixed(1)+'%';


// Product mix chart
const mixCtx = document.getElementById('mixChart');
new Chart(mixCtx, {
type: 'bar',
data: {
labels: mix.map(m => m.sku),
datasets: [{ label: 'Revenue', data: mix.map(m => m.revenue) }]
},
options: { responsive:true, plugins:{ legend:{ display:false } }, scales:{ y:{ beginAtZero:true } } }
});


// Cohort chart
const cCtx = document.getElementById('cohortChart');
new Chart(cCtx, {
type: 'line',
data: { labels: cohort.map(c => c.month), datasets: [{ label:'Subs', data: cohort.map(c => c.count), tension:0.3 }] },
options: { responsive:true, plugins:{ legend:{ display:false } }, scales:{ y:{ beginAtZero:true, precision:0 } } }
});


// Subs list
const subs = await (await fetch('/api/subscriptions?status=active')).json();
const list = document.getElementById('subsList');
subs.data.slice(0,50).forEach(s => {
const row = document.createElement('div');
row.className = 'row';
row.innerHTML = `<span>${s.id}</span><span>${s.sku}</span><span>${s.interval}</span><span>${fmtCurrency(s.mrr)}</span>`;
list.appendChild(row);
});
})();