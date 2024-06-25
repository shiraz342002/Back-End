/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('Mercury');

// Insert a few documents into the sales collection.
db.getCollection('Interns').insertMany([
    [
        {
          "Name": "Shiraz Mazhar",
          "Position": "Mern Stack Intern",
          "Age": 22,
          "Location": "New York"
        },
        {
          "Name": "John Doe",
          "Position": "Full Stack Developer",
          "Age": 30,
          "Location": "San Francisco"
        },
        {
          "Name": "Jane Smith",
          "Position": "UI/UX Designer",
          "Age": 28,
          "Location": "London"
        },
        {
          "Name": "Alex Johnson",
          "Position": "Backend Developer",
          "Age": 25,
          "Location": "Berlin"
        },
        {
          "Name": "Emily Brown",
          "Position": "Data Scientist",
          "Age": 32,
          "Location": "Tokyo"
        },
        {
          "Name": "Michael Clark",
          "Position": "Software Engineer",
          "Age": 27,
          "Location": "Sydney"
        },
        {
          "Name": "Sophia Garcia",
          "Position": "Frontend Developer",
          "Age": 26,
          "Location": "Paris"
        },
        {
          "Name": "William Martinez",
          "Position": "System Administrator",
          "Age": 29,
          "Location": "Toronto"
        },
        {
          "Name": "Ella Wilson",
          "Position": "Product Manager",
          "Age": 31,
          "Location": "Singapore"
        },
        {
          "Name": "Oliver Taylor",
          "Position": "DevOps Engineer",
          "Age": 33,
          "Location": "Dubai"
        }
      ]
      
]);

// Run a find command to view items sold on April 4th, 2014.
const salesOnApril4th = db.getCollection('sales').find({
  date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();

// Print a message to the output window.
console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection('sales').aggregate([
  // Find all of the sales that occurred in 2014.
  { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
  // Group the total sales for each product.
  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
]);
