//1.To see all the documents of the collecction
Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.find()

//2. Showing selected fields from the database
Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.aggregate({$project:{restaurant_id:1,name:1,borough:1,cuisine:1}})
[
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9be4"),
    borough: 'Bronx',
    cuisine: 'Bakery',
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9be5"),
    borough: 'Brooklyn',
    cuisine: 'Hamburgers',
    name: "Wendy'S",
    restaurant_id: '30112340'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9be6"),
    borough: 'Manhattan',
    cuisine: 'Irish',
    name: 'Dj Reynolds Pub And Restaurant',
    restaurant_id: '30191841'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9be7"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Riviera Caterer',
    restaurant_id: '40356018'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9be8"),
    borough: 'Queens',
    cuisine: 'Jewish/Kosher',
    name: 'Tov Kosher Kitchen',
    restaurant_id: '40356068'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9be9"),
    borough: 'Queens',
    cuisine: 'American ',
    name: 'Brunos On The Boulevard',
    restaurant_id: '40356151'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9bea"),
    borough: 'Staten Island',
    cuisine: 'Jewish/Kosher',
    name: 'Kosher Island',
    restaurant_id: '40356442'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9beb"),
    borough: 'Brooklyn',
    cuisine: 'Delicatessen',
    name: "Wilken'S Fine Food",
    restaurant_id: '40356483'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9bec"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Regina Caterers',
    restaurant_id: '40356649'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9bed"),
    borough: 'Brooklyn',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Taste The Tropics Ice Cream',
    restaurant_id: '40356731'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9bee"),
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Wild Asia',
    restaurant_id: '40357217'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9bef"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'C & C Catering Service',
    restaurant_id: '40357437'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9bf0"),
    borough: 'Brooklyn',
    cuisine: 'Chinese',
    name: 'May May Kitchen',
    restaurant_id: '40358429'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9bf1"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: '1 East 66Th Street Kitchen',
    restaurant_id: '40359480'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9bf2"),
    borough: 'Brooklyn',
    cuisine: 'Jewish/Kosher',
    name: 'Seuda Foods',
    restaurant_id: '40360045'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9bf3"),
    borough: 'Brooklyn',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40360076'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9bf4"),
    borough: 'Queens',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40361322'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9bf5"),
    borough: 'Brooklyn',
    cuisine: 'Delicatessen',
    name: 'Nordic Delicacies',
    restaurant_id: '40361390'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9bf6"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Glorious Food',
    restaurant_id: '40361521'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9bf7"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'The Movable Feast',
    restaurant_id: '40361606'
  }
]
Type "it" for more


//3. To show some selected fields and leave some using $project


Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.aggregate({$project:{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0}})
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
    borough: 'Manhattan',
    cuisine: 'Irish',
    name: 'Dj Reynolds Pub And Restaurant',
    restaurant_id: '30191841'
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
    borough: 'Manhattan',
    cuisine: 'American ',
    name: '1 East 66Th Street Kitchen',
    restaurant_id: '40359480'
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
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Glorious Food',
    restaurant_id: '40361521'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'The Movable Feast',
    restaurant_id: '40361606'
  }
]
Type "it" for more

//4. To print some and and print an individual field from an nested document

Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.aggregate({$project:{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0,"address.zipcode":1}})
[
  {
    address: { zipcode: '10462' },
    borough: 'Bronx',
    cuisine: 'Bakery',
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    address: { zipcode: '11225' },
    borough: 'Brooklyn',
    cuisine: 'Hamburgers',
    name: "Wendy'S",
    restaurant_id: '30112340'
  },
  {
    address: { zipcode: '10019' },
    borough: 'Manhattan',
    cuisine: 'Irish',
    name: 'Dj Reynolds Pub And Restaurant',
    restaurant_id: '30191841'
  },
  {
    address: { zipcode: '11224' },
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Riviera Caterer',
    restaurant_id: '40356018'
  },
  {
    address: { zipcode: '11374' },
    borough: 'Queens',
    cuisine: 'Jewish/Kosher',
    name: 'Tov Kosher Kitchen',
    restaurant_id: '40356068'
  },
  {
    address: { zipcode: '11369' },
    borough: 'Queens',
    cuisine: 'American ',
    name: 'Brunos On The Boulevard',
    restaurant_id: '40356151'
  },
  {
    address: { zipcode: '10314' },
    borough: 'Staten Island',
    cuisine: 'Jewish/Kosher',
    name: 'Kosher Island',
    restaurant_id: '40356442'
  },
  {
    address: { zipcode: '11234' },
    borough: 'Brooklyn',
    cuisine: 'Delicatessen',
    name: "Wilken'S Fine Food",
    restaurant_id: '40356483'
  },
  {
    address: { zipcode: '11219' },
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Regina Caterers',
    restaurant_id: '40356649'
  },
  {
    address: { zipcode: '11226' },
    borough: 'Brooklyn',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Taste The Tropics Ice Cream',
    restaurant_id: '40356731'
  },
  {
    address: { zipcode: '10460' },
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Wild Asia',
    restaurant_id: '40357217'
  },
  {
    address: { zipcode: '11214' },
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'C & C Catering Service',
    restaurant_id: '40357437'
  },
  {
    address: { zipcode: '11208' },
    borough: 'Brooklyn',
    cuisine: 'Chinese',
    name: 'May May Kitchen',
    restaurant_id: '40358429'
  },
  {
    address: { zipcode: '10065' },
    borough: 'Manhattan',
    cuisine: 'American ',
    name: '1 East 66Th Street Kitchen',
    restaurant_id: '40359480'
  },
  {
    address: { zipcode: '11223' },
    borough: 'Brooklyn',
    cuisine: 'Jewish/Kosher',
    name: 'Seuda Foods',
    restaurant_id: '40360045'
  },
  {
    address: { zipcode: '11218' },
    borough: 'Brooklyn',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40360076'
  },
  {
    address: { zipcode: '11004' },
    borough: 'Queens',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40361322'
  },
  {
    address: { zipcode: '11209' },
    borough: 'Brooklyn',
    cuisine: 'Delicatessen',
    name: 'Nordic Delicacies',
    restaurant_id: '40361390'
  },
  {
    address: { zipcode: '10021' },
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Glorious Food',
    restaurant_id: '40361521'
  },
  {
    address: { zipcode: '11215' },
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'The Movable Feast',
    restaurant_id: '40361606'
  }
]
Type "it" for more


//5. to print the first 5 restaurants that have bronx as thier borough

Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{borough:'Bronx'}},{$project:{name:1,borough:1}},{$limit:5}])
[
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9be4"),
    borough: 'Bronx',
    name: 'Morris Park Bake Shop'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9bee"),
    borough: 'Bronx',
    name: 'Wild Asia'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c03"),
    borough: 'Bronx',
    name: 'Carvel Ice Cream'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c07"),
    borough: 'Bronx',
    name: 'Happy Garden'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c19"),
    borough: 'Bronx',
    name: 'Happy Garden'
  }
]

//6. to print the names of all restaurants in the borough bronx


Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{borough:'Bronx'}},{$project:{borough:1,name:1}}])
[
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9be4"),
    borough: 'Bronx',
    name: 'Morris Park Bake Shop'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9bee"),
    borough: 'Bronx',
    name: 'Wild Asia'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c03"),
    borough: 'Bronx',
    name: 'Carvel Ice Cream'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c07"),
    borough: 'Bronx',
    name: 'Happy Garden'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c19"),
    borough: 'Bronx',
    name: 'Happy Garden'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c21"),
    borough: 'Bronx',
    name: 'Manhem Club'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c39"),
    borough: 'Bronx',
    name: 'The New Starling Athletic Club Of The Bronx'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c51"),
    borough: 'Bronx',
    name: 'Yankee Tavern'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c64"),
    borough: 'Bronx',
    name: 'Mcdwyers Pub'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c7d"),
    borough: 'Bronx',
    name: 'The Punch Bowl'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c88"),
    borough: 'Bronx',
    name: 'Munchtime'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c8a"),
    borough: 'Bronx',
    name: 'Ihop'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c8f"),
    borough: 'Bronx',
    name: "Lulu'S Coffee Shop"
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c95"),
    borough: 'Bronx',
    name: 'Marina Delray'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9cba"),
    borough: 'Bronx',
    name: "The Lark'S Nest"
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9cbb"),
    borough: 'Bronx',
    name: 'Terrace Cafe'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9cbc"),
    borough: 'Bronx',
    name: 'African Terrace'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9cbd"),
    borough: 'Bronx',
    name: 'Cool Zone'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9cbe"),
    borough: 'Bronx',
    name: 'Beaver Pond'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9cbf"),
    borough: 'Bronx',
    name: 'African Market (Baboon Cafe)'
  }
]
Type "it" for more


//7. skipping first 5 borough bronx restaurants

Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{borough:'Bronx'}},{$skip:5},{$project:{borough:1,name:1}}])
[
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c21"),
    borough: 'Bronx',
    name: 'Manhem Club'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c39"),
    borough: 'Bronx',
    name: 'The New Starling Athletic Club Of The Bronx'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c51"),
    borough: 'Bronx',
    name: 'Yankee Tavern'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c64"),
    borough: 'Bronx',
    name: 'Mcdwyers Pub'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c7d"),
    borough: 'Bronx',
    name: 'The Punch Bowl'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c88"),
    borough: 'Bronx',
    name: 'Munchtime'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c8a"),
    borough: 'Bronx',
    name: 'Ihop'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c8f"),
    borough: 'Bronx',
    name: "Lulu'S Coffee Shop"
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9c95"),
    borough: 'Bronx',
    name: 'Marina Delray'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9cba"),
    borough: 'Bronx',
    name: "The Lark'S Nest"
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9cbb"),
    borough: 'Bronx',
    name: 'Terrace Cafe'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9cbc"),
    borough: 'Bronx',
    name: 'African Terrace'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9cbd"),
    borough: 'Bronx',
    name: 'Cool Zone'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9cbe"),
    borough: 'Bronx',
    name: 'Beaver Pond'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9cbf"),
    borough: 'Bronx',
    name: 'African Market (Baboon Cafe)'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9cdf"),
    borough: 'Bronx',
    name: 'Blue Bay Restaurant'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9ce7"),
    borough: 'Bronx',
    name: 'Seashore Restaurant'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9cf1"),
    borough: 'Bronx',
    name: 'Bronx Grill'
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9cf4"),
    borough: 'Bronx',
    name: "Johnny'S Reef Restaurant"
  },
  {
    _id: ObjectId("617faeb1a44cc5a6b43f9cf6"),
    borough: 'Bronx',
    name: 'White Castle'
  }
]
Type "it" for more
