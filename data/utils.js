export const startOfMonth = d => new Date(d.getFullYear(), d.getMonth(), 1);
export const addDays = (d, days) => new Date(d.getTime() + days*24*60*60*1000);
export const formatISO = d => new Date(d.getTime() - d.getTimezoneOffset()*60000).toISOString().slice(0,19);


export const sum = arr => arr.reduce((a,b) => a + b, 0);
export const groupBy = (arr, key) => arr.reduce((acc, x) => {
const k = typeof key === 'function' ? key(x) : x[key];
acc[k] ||= []; acc[k].push(x); return acc;
}, {});