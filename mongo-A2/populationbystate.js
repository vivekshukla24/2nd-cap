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


Atlas atlas-3gp48w-shard-0 [primary] population> db.zipcodes.aggregate([{$group:{_id:'$state',totalpop:{$sum:'$pop'}}},{$sort:{totalpop:1}}])
[
  { _id: 'WY', totalpop: 453528 },
  { _id: 'AK', totalpop: 544698 },
  { _id: 'VT', totalpop: 562758 },
  { _id: 'DC', totalpop: 606900 },
  { _id: 'ND', totalpop: 638272 },
  { _id: 'DE', totalpop: 666168 },
  { _id: 'SD', totalpop: 695397 },
  { _id: 'MT', totalpop: 798948 },
  { _id: 'RI', totalpop: 1003218 },
  { _id: 'ID', totalpop: 1006749 },
  { _id: 'HI', totalpop: 1108229 },
  { _id: 'NH', totalpop: 1109252 },
  { _id: 'NV', totalpop: 1201833 },
  { _id: 'ME', totalpop: 1226648 },
  { _id: 'NM', totalpop: 1515069 },
  { _id: 'NE', totalpop: 1578139 },
  { _id: 'UT', totalpop: 1722850 },
  { _id: 'WV', totalpop: 1793146 },
  { _id: 'AR', totalpop: 2350725 },
  { _id: 'KS', totalpop: 2475285 }
]
Type "it" for more
