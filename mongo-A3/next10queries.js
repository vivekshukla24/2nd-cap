//11. To filter retaurants by removing all American cuisine restaurants and lower than certain lattitude and greater then certain score

Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{cuisine:{$ne:"American "},"grades.score":{$gt:70},"address.coord.0":{$lt:-65.754168}}},{$project:{name:1,cuisine:1,"address.coord":1}}])
[
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9de3"),
    address: { coord: [ -73.9864626, 40.7266739 ] },
    cuisine: 'Indian',
    name: 'Gandhi'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9f46"),
    address: { coord: [ -73.984758, 40.7457939 ] },
    cuisine: 'Pizza/Italian',
    name: 'Bella Napoli'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9f51"),
    address: { coord: [ -73.9243061, 40.8276297 ] },
    cuisine: 'Latin (Cuban, Dominican, Puerto Rican, South & Central American)',
    name: 'El Molino Rojo Restaurant'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43fa0a1"),
    address: { coord: [ -73.94610279999999, 40.7137587 ] },
    cuisine: 'Bakery',
    name: 'Fortunato Bros Cafe & Bakery'
  },
  {
    _id: ObjectId("617faeb2a44cc5a6b43fa6cb"),
    address: { coord: [ -73.9772294, 40.7527262 ] },
    cuisine: 'Italian',
    name: 'Two Boots Grand Central'
  }
]


//12. Same as above but lattitude -> longitude

Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{cuisine:{$ne:"American "},"grades.score":{$gt:70},"address.coord.1":{$lt:-65.754168}}},{$project:{name:1,cuisine:1,"address.coord":1}}])

//won't give results becuase it has no document like this


//13. 
