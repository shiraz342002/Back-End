import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017';
const dbName = 'shop';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/aggregate', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const orders = db.collection('orders');  
    const pipeline = [
      {
        $match: { size  : 'apple' }
      },
      {
        $group: {
          _id: '$product',
          totalQuantity: { $sum: '$quantity' },
          totalPrice: { $sum: { $multiply: ['$quantity', '$price'] } }
        }
      },
      {
        $sort: { totalQuantity: -1 }
      }
    ];

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
