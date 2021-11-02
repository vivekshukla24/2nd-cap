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


//13. The restaurant should not be american acc to cuisine, grade should be A, not brooklyn as borough


Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{cuisine:{$ne:"American "},"grades.grade":'A',borough:{$ne:'Brooklyn'}}},{$project:{name:1,cuisine:1,borough:1,"address.coord":1,_id:0}}])
[
  {
    address: { coord: [ -73.856077, 40.848447 ] },
    borough: 'Bronx',
    cuisine: 'Bakery',
    name: 'Morris Park Bake Shop'
  },
  {
    address: { coord: [ -73.98513559999999, 40.7676919 ] },
    borough: 'Manhattan',
    cuisine: 'Irish',
    name: 'Dj Reynolds Pub And Restaurant'
  },
  {
    address: { coord: [ -73.8601152, 40.7311739 ] },
    borough: 'Queens',
    cuisine: 'Jewish/Kosher',
    name: 'Tov Kosher Kitchen'
  },
  {
    address: { coord: [ -74.1377286, 40.6119572 ] },
    borough: 'Staten Island',
    cuisine: 'Jewish/Kosher',
    name: 'Kosher Island'
  },
  {
    address: { coord: [ -73.7032601, 40.7386417 ] },
    borough: 'Queens',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream'
  },
  {
    address: { coord: [ -73.839297, 40.78147 ] },
    borough: 'Queens',
    cuisine: 'Delicatessen',
    name: "Sal'S Deli"
  },
  {
    address: { coord: [ -73.9925306, 40.7309346 ] },
    borough: 'Manhattan',
    cuisine: 'Delicatessen',
    name: "Bully'S Deli"
  },
  {
    address: { coord: [ -73.94024739999999, 40.7623288 ] },
    borough: 'Queens',
    cuisine: 'Delicatessen',
    name: "Steve Chu'S Deli & Grocery"
  },
  {
    address: { coord: [ -73.976112, 40.786714 ] },
    borough: 'Manhattan',
    cuisine: 'Chicken',
    name: "Harriet'S Kitchen"
  },
  {
    address: { coord: [ -73.8642349, 40.75356 ] },
    borough: 'Queens',
    cuisine: 'Chinese',
    name: 'Ho Mei Restaurant'
  },
  {
    address: { coord: [ -74.0085357, 40.70620539999999 ] },
    borough: 'Manhattan',
    cuisine: 'Turkish',
    name: 'The Country Cafe'
  }
]
Type "it" for more

//14.

Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{name:{$regex:"^Wil"}}},{$project:{name:1,borough:1,cuisine:1,restaurant_id:1,_id:0}}])
[
  {
    borough: 'Brooklyn',
    cuisine: 'Delicatessen',
    name: "Wilken'S Fine Food",
    restaurant_id: '40356483'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Wild Asia',
    restaurant_id: '40357217'
  },
  {
    borough: 'Bronx',
    cuisine: 'Pizza',
    name: 'Wilbel Pizza',
    restaurant_id: '40871979'
  }
]

//15. output info about restaurant whose name ends with ces

Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{name:{$regex:"ces$"}}},{$project:{name:1,borough:1,cuisine:1,restaurant_id:1,_id:0}}])
[
  {
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Pieces',
    restaurant_id: '40399910'
  },
  {
    borough: 'Queens',
    cuisine: 'American ',
    name: 'S.M.R Restaurant Services',
    restaurant_id: '40403857'
  },
  {
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Good Shepherd Services',
    restaurant_id: '40403989'
  },
  {
    borough: 'Queens',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: "The Ice Box-Ralph'S Famous Italian Ices",
    restaurant_id: '40690899'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'Jewish/Kosher',
    name: 'Alices',
    restaurant_id: '40782042'
  },
  {
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Re: Sources',
    restaurant_id: '40876068'
  }
]
