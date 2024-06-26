import express from 'express';
import { MongoClient } from 'mongodb';
import orderModel from "./Models/pizzas.js";
orderModel.aggregate([]);

const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017';
const dbName = 'pizza';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/aggregate', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const orders = db.collection('pizzas_items');  
    orderModel.aggregate([
      {
          $match: {
              date: { $gte: new Date("2020-01-30"), $lt: new Date("2022-01-30") },
          },
      },
      {
          $group: {
              _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
              totalOrderValue: { $sum: { $multiply: ["$price", "$quantity"] } },
              averageOrderQuantity: { $avg: "$quantity" },
          },
      },
      {
          $sort: { totalOrderValue: -1 },
      },
  ]);

    const result = await orders.aggregate(pipeline).toArray();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error occurred during aggregation');
  } finally {
    await client.close();
  }
  
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
