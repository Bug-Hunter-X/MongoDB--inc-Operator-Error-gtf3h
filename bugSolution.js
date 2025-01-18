```javascript
// Correct usage of $inc operator
db.collection.updateOne({ _id: 1 }, { $inc: { field: 1 } });
//Alternative if field is string and needs to be converted to a number:
db.collection.findOneAndReplace({_id:1},{$inc:{field:1}});
```