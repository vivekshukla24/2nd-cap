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


//16.


Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{name:{$regex:"Wil"}}},{$project:{name:1,borough:1,cuisine:1,restaurant_id:1,_id:0}}])
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
    cuisine: 'American ',
    name: 'The Williamsbridge Tavern',
    restaurant_id: '40852754'
  },
  {
    borough: 'Bronx',
    cuisine: 'Pizza',
    name: 'Wilbel Pizza',
    restaurant_id: '40871979'
  }
]


//17.

Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{borough:'Bronx', $or:[{cuisine:'American '},{cuisine:'Chinese'}]}},{$project:{name:1,restaurant_id:1,cuisine:1,borough:1,_id:0}}])
[
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Wild Asia',
    restaurant_id: '40357217'
  },
  {
    borough: 'Bronx',
    cuisine: 'Chinese',
    name: 'Happy Garden',
    restaurant_id: '40363289'
  },
  {
    borough: 'Bronx',
    cuisine: 'Chinese',
    name: 'Happy Garden',
    restaurant_id: '40364296'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Manhem Club',
    restaurant_id: '40364363'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'The New Starling Athletic Club Of The Bronx',
    restaurant_id: '40364956'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Yankee Tavern',
    restaurant_id: '40365499'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'The Punch Bowl',
    restaurant_id: '40366497'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Munchtime',
    restaurant_id: '40366748'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Marina Delray',
    restaurant_id: '40367161'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Cool Zone',
    restaurant_id: '40368022'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Beaver Pond',
    restaurant_id: '40368025'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'African Market (Baboon Cafe)',
    restaurant_id: '40368026'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Blue Bay Restaurant',
    restaurant_id: '40369087'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Bronx Grill',
    restaurant_id: '40369601'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: "P & K'S Grill",
    restaurant_id: '40369895'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: "John Mulligan'S Fireside Pub",
    restaurant_id: '40370150'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Quality Cafe & Restaurant',
    restaurant_id: '40374259'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Riverdale Diner',
    restaurant_id: '40380253'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Castlehill Diner',
    restaurant_id: '40382517'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Short Stop Restaurant',
    restaurant_id: '40383819'
  }
]
Type "it" for more

//18.


Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{borough:{$in:['Queens','Staten Island','Bronx','Brooklyn']}}},{$project:{name:1,restaurant_id:1,cuisine:1,borough:1,_id:0}}])
[
  {
    borough: 'Bronx',
    cuisine: 'Bakery',
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'Hamburgers',
    name: "Wendy'S",
    restaurant_id: '30112340'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Riviera Caterer',
    restaurant_id: '40356018'
  },
  {
    borough: 'Queens',
    cuisine: 'Jewish/Kosher',
    name: 'Tov Kosher Kitchen',
    restaurant_id: '40356068'
  },
  {
    borough: 'Queens',
    cuisine: 'American ',
    name: 'Brunos On The Boulevard',
    restaurant_id: '40356151'
  },
  {
    borough: 'Staten Island',
    cuisine: 'Jewish/Kosher',
    name: 'Kosher Island',
    restaurant_id: '40356442'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'Delicatessen',
    name: "Wilken'S Fine Food",
    restaurant_id: '40356483'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Regina Caterers',
    restaurant_id: '40356649'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Taste The Tropics Ice Cream',
    restaurant_id: '40356731'
  },
  {
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Wild Asia',
    restaurant_id: '40357217'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'C & C Catering Service',
    restaurant_id: '40357437'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'Chinese',
    name: 'May May Kitchen',
    restaurant_id: '40358429'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'Jewish/Kosher',
    name: 'Seuda Foods',
    restaurant_id: '40360045'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40360076'
  },
  {
    borough: 'Queens',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40361322'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'Delicatessen',
    name: 'Nordic Delicacies',
    restaurant_id: '40361390'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'The Movable Feast',
    restaurant_id: '40361606'
  },
  {
    borough: 'Queens',
    cuisine: 'Delicatessen',
    name: "Sal'S Deli",
    restaurant_id: '40361618'
  },
  {
    borough: 'Queens',
    cuisine: 'Delicatessen',
    name: "Steve Chu'S Deli & Grocery",
    restaurant_id: '40361998'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'Hamburgers',
    name: 'White Castle',
    restaurant_id: '40362344'
  }
]
Type "it" for more


//19.


Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{borough:{$nin:['Queens','Staten Island','Bronx','Brooklyn']}}},{$project:{name:1,restaurant_id:1,cuisine:1,borough:1,_id:0}}])
[
  {
    borough: 'Manhattan',
    cuisine: 'Irish',
    name: 'Dj Reynolds Pub And Restaurant',
    restaurant_id: '30191841'
  },
  {
    borough: 'Manhattan',
    cuisine: 'American ',
    name: '1 East 66Th Street Kitchen',
    restaurant_id: '40359480'
  },
  {
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Glorious Food',
    restaurant_id: '40361521'
  },
  {
    borough: 'Manhattan',
    cuisine: 'Delicatessen',
    name: "Bully'S Deli",
    restaurant_id: '40361708'
  },
  {
    borough: 'Manhattan',
    cuisine: 'Chicken',
    name: "Harriet'S Kitchen",
    restaurant_id: '40362098'
  },
  {
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'P & S Deli Grocery',
    restaurant_id: '40362264'
  },
  {
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Angelika Film Center',
    restaurant_id: '40362274'
  },
  {
    borough: 'Manhattan',
    cuisine: 'Turkish',
    name: 'The Country Cafe',
    restaurant_id: '40362715'
  },
  {
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Downtown Deli',
    restaurant_id: '40363021'
  },
  {
    borough: 'Manhattan',
    cuisine: 'Bakery',
    name: "Olive'S",
    restaurant_id: '40363151'
  },
  {
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Cafe Metro',
    restaurant_id: '40363298'
  },
  {
    borough: 'Manhattan',
    cuisine: 'Sandwiches/Salads/Mixed Buffet',
    name: 'Lexler Deli',
    restaurant_id: '40363426'
  },
  {
    borough: 'Manhattan',
    cuisine: 'Continental',
    name: "Lorenzo & Maria'S",
    restaurant_id: '40363630'
  },
  {
    borough: 'Manhattan',
    cuisine: 'Pizza',
    name: "Domino'S Pizza",
    restaurant_id: '40363644'
  },
  {
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Berkely',
    restaurant_id: '40363685'
  },
  {
    borough: 'Manhattan',
    cuisine: 'Pizza',
    name: "Domino'S Pizza",
    restaurant_id: '40363945'
  },
  {
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Spoon Bread Catering',
    restaurant_id: '40364179'
  },
  {
    borough: 'Manhattan',
    cuisine: 'Chicken',
    name: 'Texas Rotisserie',
    restaurant_id: '40364304'
  },
  {
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Metropolitan Club',
    restaurant_id: '40364347'
  },
  {
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Palm Restaurant',
    restaurant_id: '40364355'
  }
]
Type "it" for more


//20. score not greater than 10

Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{"grades.score":{$not:{$lt:10}}}},{$project:{name:1,restaurant_id:1,cuisine:1,borough:1,_id:0}}])
[
  {
    borough: 'Queens',
    cuisine: 'Jewish/Kosher',
    name: 'Tov Kosher Kitchen',
    restaurant_id: '40356068'
  },
  {
    borough: 'Queens',
    cuisine: 'Bagels/Pretzels',
    name: 'Hot Bagels',
    restaurant_id: '40363565'
  },
  {
    borough: 'Bronx',
    cuisine: 'Chinese',
    name: 'Happy Garden',
    restaurant_id: '40364296'
  },
  {
    borough: 'Manhattan',
    cuisine: 'American ',
    name: '21 Club',
    restaurant_id: '40364362'
  },
  {
    borough: 'Manhattan',
    cuisine: 'American ',
    name: '7B Bar',
    restaurant_id: '40364518'
  },
  {
    borough: 'Manhattan',
    cuisine: 'Italian',
    name: 'Marchis Restaurant',
    restaurant_id: '40364668'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Melody Lanes',
    restaurant_id: '40364889'
  },
  {
    borough: 'Manhattan',
    cuisine: 'French',
    name: 'Le Perigord',
    restaurant_id: '40365414'
  },
  {
    borough: 'Manhattan',
    cuisine: 'Irish',
    name: "Moran'S Chelsea",
    restaurant_id: '40365526'
  },
  {
    borough: 'Manhattan',
    cuisine: 'Italian',
    name: 'V & T Restaurant',
    restaurant_id: '40365577'
  },
  {
    borough: 'Staten Island',
    cuisine: 'American ',
    name: "Joyce'S Tavern",
    restaurant_id: '40365692'
  },
  {
    borough: 'Manhattan',
    cuisine: 'Italian',
    name: 'Il Vagabondo Restaurant',
    restaurant_id: '40365709'
  },
  {
    borough: 'Queens',
    cuisine: 'Italian',
    name: 'Parkside Restaurant',
    restaurant_id: '40365841'
  },
  {
    borough: 'Bronx',
    cuisine: 'Irish',
    name: 'Mcdwyers Pub',
    restaurant_id: '40365893'
  },
  {
    borough: 'Manhattan',
    cuisine: 'Chinese',
    name: 'Hop Kee Restaurant',
    restaurant_id: '40365942'
  },
  {
    borough: 'Queens',
    cuisine: 'Pizza',
    name: 'Margherita Pizza',
    restaurant_id: '40366002'
  },
  {
    borough: 'Manhattan',
    cuisine: 'Italian',
    name: 'Nanni Restaurant',
    restaurant_id: '40366157'
  },
  {
    borough: 'Queens',
    cuisine: 'Italian',
    name: 'Don Peppe',
    restaurant_id: '40366230'
  },
  {
    borough: 'Queens',
    cuisine: 'Irish',
    name: 'Irish Cottage',
    restaurant_id: '40366549'
  },
  {
    borough: 'Staten Island',
    cuisine: 'American ',
    name: "Li Greci'S Staaten Restaurant",
    restaurant_id: '40366711'
  }
]
Type "it" for more
