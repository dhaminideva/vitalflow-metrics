# ⚡️ VitalFlow Metrics

> **A modern e-commerce analytics dashboard** built with **Node.js**, **Express**, and **vanilla JS**, visualizing subscription & sales performance with live Power BI embedding.

![Node.js](https://img.shields.io/badge/Node.js-22.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-lightgrey?logo=express)
![Power BI](https://img.shields.io/badge/Power%20BI-embedded-yellow?logo=powerbi)
![License](https://img.shields.io/badge/license-MIT-blue)



<table>
<tr>
<td><img src="https://github.com/user-attachments/assets/3f48acd9-3952-40b9-b652-9699d92f585d" alt="landing page" width="400"/></td>

<td><img src="https://github.com/user-attachments/assets/d7e61280-2de3-4f45-ae38-9b6c32988951" alt="metrics" width="400"/></td>
</tr>
</table>
---

## 🌐 Overview

**VitalFlow Metrics** is a lightweight full-stack application that simulates a real-world e-commerce analytics portal.
It showcases how sales, subscriptions, and product mix metrics can be tracked and visualized using a custom dashboard that integrates **Power BI reports**.

This project was designed to mirror a professional workflow used in hybrid architectures — combining **Node.js micro-services**, **static JS front-end**, and **embedded analytics**.

---

## ✨ Features

* 📦 **Dynamic KPI Cards** — Live revenue, orders, and churn metrics
* 📊 **Product Mix & Subscription Charts** — Interactive data visualization
* 💳 **Subscription Table** — Displays active plans and monthly values
* 📈 **Power BI Integration** — Embeds real dashboards using Microsoft Playground or “Publish to Web” links
* ⚙️ **Express API** — REST routes for `/metrics`, `/subscriptions`, and `/webhooks`
* ☁️ **Modular Design** — Ready for connection to PostgreSQL, AWS, or Azure pipelines

---

## 🧰 Tech Stack

| Layer           | Technology                                      |
| --------------- | ----------------------------------------------- |
| **Frontend**    | HTML / CSS / Vanilla JS                         |
| **Backend**     | Node 22 + Express                               |
| **Analytics**   | Power BI Embedded                               |
| **Environment** | dotenv + morgan                                 |
| **Data Source** | JSON / optional PostgreSQL (future integration) |

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/dhaminideva/vitalflow-metrics.git
cd vitalflow-metrics
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create environment file

```
PORT=3000
NODE_ENV=development
```

Save it as `.env` in the root folder.

### 4️⃣ Start the development server

```bash
npm run dev
```

Visit 👉 **[http://localhost:3000](http://localhost:3000)**

---

## 💡 Embedding Power BI

1. Go to [Power BI Playground](https://playground.powerbi.com/embedded-demo)
2. Choose **“Use Sample Report”** → copy the **iframe** or **embed URL**
3. Paste it into the Power BI input box on the dashboard → click **Load**

Your embedded Power BI report appears instantly inside the dashboard!

---

## 🧪 Folder Structure

```
vitalflow-metrics/
│
├── public/            # Front-end assets (HTML, CSS, JS)
│   ├── app.js
│   ├── powerbi.js
│   └── styles.css
│
├── routes/            # Express route handlers
│   ├── metrics.js
│   ├── subscriptions.js
│   └── webhooks.js
│
├── data/              # Local seed data
│   ├── vitalflow.json
│   └── utils.js
│
├── server.js          # Express entry point
├── package.json
└── .env
```

---

## 🧭 Future Enhancements

* Integrate PostgreSQL via Prisma
* Add authentication for Power BI Embed tokens
* Enable live BigCommerce / QuickBooks / Salesforce connectors
* Deploy to Azure App Service for production hosting

---

## 🧑‍💻 Author

**[Dhamini Devaraj](https://github.com/dhaminideva)**
📫 Reach me on LinkedIn or via GitHub for collaborations or feedback!

---

⭐ If you like this project, give it a star on GitHub — it helps others discover it!
