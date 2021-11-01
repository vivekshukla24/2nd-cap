
Atlas atlas-3gp48w-shard-0 [primary] population> db.zipcodes.aggregate([{$group:{_id:{city:'$city',state:'$state'},totalpop:{$sum:'$pop'}}}])
[
  { _id: { city: 'WEST BETHESDA', state: 'MD' }, totalpop: 33484 },
  { _id: { city: 'MILLTOWN', state: 'NJ' }, totalpop: 8362 },
  { _id: { city: 'DUBLIN', state: 'VA' }, totalpop: 9521 },
  { _id: { city: 'HAMBURG', state: 'IL' }, totalpop: 383 },
  { _id: { city: 'HYANNIS', state: 'NE' }, totalpop: 430 },
  { _id: { city: 'HICKS', state: 'LA' }, totalpop: 21956 },
  { _id: { city: 'MOUNT JUDEA', state: 'AR' }, totalpop: 665 },
  { _id: { city: 'SUNNYSIDE', state: 'WA' }, totalpop: 16774 },
  { _id: { city: 'WOODVILLE', state: 'OH' }, totalpop: 2968 },
  { _id: { city: 'CLIO', state: 'AL' }, totalpop: 3178 },
  { _id: { city: 'SAINT PAUL', state: 'AR' }, totalpop: 608 },
  { _id: { city: 'FREDERICKSBURG', state: 'VA' }, totalpop: 63895 },
  { _id: { city: 'SLICKVILLE', state: 'PA' }, totalpop: 318 },
  { _id: { city: 'GRATZ', state: 'PA' }, totalpop: 696 },
  { _id: { city: 'HEATH SPRINGS', state: 'SC' }, totalpop: 5101 },
  { _id: { city: 'WHITEHOUSE', state: 'KY' }, totalpop: 2105 },
  { _id: { city: 'REED CITY', state: 'MI' }, totalpop: 5056 },
  { _id: { city: 'NORTHPOINT', state: 'PA' }, totalpop: 49 },
  { _id: { city: 'CLINTON', state: 'OK' }, totalpop: 10287 },
  { _id: { city: 'SACATON', state: 'AZ' }, totalpop: 6792 }
]
Type "it" for more

Atlas atlas-3gp48w-shard-0 [primary] population> db.zipcodes.aggregate([{$group:{_id:{city:'$city',state:'$state'},totalpop:{$sum:'$pop'}}},{$sort:{totalpop:-1}}])
[
  { _id: { city: 'CHICAGO', state: 'IL' }, totalpop: 2452177 },
  { _id: { city: 'BROOKLYN', state: 'NY' }, totalpop: 2300504 },
  { _id: { city: 'LOS ANGELES', state: 'CA' }, totalpop: 2102295 },
  { _id: { city: 'HOUSTON', state: 'TX' }, totalpop: 2095918 },
  { _id: { city: 'PHILADELPHIA', state: 'PA' }, totalpop: 1610956 },
  { _id: { city: 'NEW YORK', state: 'NY' }, totalpop: 1476790 },
  { _id: { city: 'BRONX', state: 'NY' }, totalpop: 1209548 },
  { _id: { city: 'SAN DIEGO', state: 'CA' }, totalpop: 1049298 },
  { _id: { city: 'DETROIT', state: 'MI' }, totalpop: 963243 },
  { _id: { city: 'DALLAS', state: 'TX' }, totalpop: 940191 },
  { _id: { city: 'PHOENIX', state: 'AZ' }, totalpop: 890853 },
  { _id: { city: 'MIAMI', state: 'FL' }, totalpop: 825232 },
  { _id: { city: 'SAN JOSE', state: 'CA' }, totalpop: 816653 },
  { _id: { city: 'SAN ANTONIO', state: 'TX' }, totalpop: 811792 },
  { _id: { city: 'BALTIMORE', state: 'MD' }, totalpop: 733081 },
  { _id: { city: 'SAN FRANCISCO', state: 'CA' }, totalpop: 723993 },
  { _id: { city: 'MEMPHIS', state: 'TN' }, totalpop: 632837 },
  { _id: { city: 'SACRAMENTO', state: 'CA' }, totalpop: 628279 },
  { _id: { city: 'JACKSONVILLE', state: 'FL' }, totalpop: 610160 },
  { _id: { city: 'ATLANTA', state: 'GA' }, totalpop: 609591 }
]
Type "it" for more



Atlas atlas-3gp48w-shard-0 [primary] population> db.zipcodes.aggregate([{$group:{_id:{city:'$city',state:'$state'},totalpop:{$sum:'$pop'}}},{$sort:{totalpop:-1}},{$limit:3} ])
[
  { _id: { city: 'CHICAGO', state: 'IL' }, totalpop: 2452177 },
  { _id: { city: 'BROOKLYN', state: 'NY' }, totalpop: 2300504 },
  { _id: { city: 'LOS ANGELES', state: 'CA' }, totalpop: 2102295 }
]



//top 3 cities with highest population in texas
Atlas atlas-3gp48w-shard-0 [primary] population> db.zipcodes.aggregate([{$match:{state:'TX'}},{$group:{_id:'$city',population:{$sum:'$pop'}}},{$sort:{population:-1}},{$limit:3}])
[
  { _id: 'HOUSTON', population: 2095918 },
  { _id: 'DALLAS', population: 940191 },
  { _id: 'SAN ANTONIO', population: 811792 }
]
