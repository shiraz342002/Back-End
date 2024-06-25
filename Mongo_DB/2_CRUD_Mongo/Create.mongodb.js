use("Crud_Operations_Mongo")
console.log(db);

//Create 
db.createCollection("students")

//You can also Insert multiple values
db.students.insertMany([
    {
      "Name": "John Doe",
      "Age": 25,
      "CGPA": 3.9
    },
    {
      "Name": "Jane Smith",
      "Age": 23,
      "CGPA": 3.7
    },
    {
      "Name": "Alex Johnson",
      "Age": 23,
      "CGPA": 3.8
    }
  ]);
db.students.insertOne({
  "Name": "Shiraz",
  "Age": 21,
  "CGPA": 3.3
});





