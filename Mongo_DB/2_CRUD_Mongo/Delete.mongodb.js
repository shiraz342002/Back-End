use("Crud_Operations_Mongo")
db.students.deleteOne(
    {Age:23}
)
//To delete all instances
db.students.deleteMany(
    {Age:23}
)
