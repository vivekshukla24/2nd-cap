Atlas atlas-3gp48w-shard-0 [primary] population> db.zipcodes.aggregate([{$group:{_id:'$state',totalpop:{$sum:"$pop"}}}])
[
  { _id: 'MD', totalpop: 4781379 },
  { _id: 'ND', totalpop: 638272 },
  { _id: 'NY', totalpop: 17990402 },
  { _id: 'MA', totalpop: 6016425 },
  { _id: 'IA', totalpop: 2776420 },
  { _id: 'ME', totalpop: 1226648 },
  { _id: 'MT', totalpop: 798948 },
  { _id: 'WV', totalpop: 1793146 },
  { _id: 'NH', totalpop: 1109252 },
  { _id: 'VA', totalpop: 6181479 },
  { _id: 'FL', totalpop: 12686644 },
  { _id: 'MN', totalpop: 4372982 },
  { _id: 'RI', totalpop: 1003218 },
  { _id: 'PA', totalpop: 11881643 },
  { _id: 'OH', totalpop: 10846517 },
  { _id: 'SC', totalpop: 3486703 },
  { _id: 'IL', totalpop: 11427576 },
  { _id: 'NC', totalpop: 6628637 },
  { _id: 'VT', totalpop: 562758 },
  { _id: 'NE', totalpop: 1578139 }
]
Type "it" for more

//sorting states with the total of thier population in increasting order


Atlas atlas-3gp48w-shard-0 [primary] population> db.zipcodes.aggregate([{$group:{_id:'$state',totalpop:{$sum:'$pop'}}},{$sort:{totalpop:-1}}])
[
  { _id: 'CA', totalpop: 29754890 },
  { _id: 'NY', totalpop: 17990402 },
  { _id: 'TX', totalpop: 16984601 },
  { _id: 'FL', totalpop: 12686644 },
  { _id: 'PA', totalpop: 11881643 },
  { _id: 'IL', totalpop: 11427576 },
  { _id: 'OH', totalpop: 10846517 },
  { _id: 'MI', totalpop: 9295297 },
  { _id: 'NJ', totalpop: 7730188 },
  { _id: 'NC', totalpop: 6628637 },
  { _id: 'GA', totalpop: 6478216 },
  { _id: 'VA', totalpop: 6181479 },
  { _id: 'MA', totalpop: 6016425 },
  { _id: 'IN', totalpop: 5544136 },
  { _id: 'MO', totalpop: 5110648 },
  { _id: 'WI', totalpop: 4891769 },
  { _id: 'TN', totalpop: 4876457 },
  { _id: 'WA', totalpop: 4866692 },
  { _id: 'MD', totalpop: 4781379 },
  { _id: 'MN', totalpop: 4372982 }
]
Type "it" for more

// limiting answers for only 3 ouputs

Atlas atlas-3gp48w-shard-0 [primary] population> db.zipcodes.aggregate([{$group:{_id:'$state',totalpop:{$sum:'$pop'}}},{$sort:{totalpop:-1}},{$limit:3}])
[
  { _id: 'CA', totalpop: 29754890 },
  { _id: 'NY', totalpop: 17990402 },
  { _id: 'TX', totalpop: 16984601 }
]
