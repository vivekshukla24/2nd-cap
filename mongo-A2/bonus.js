Atlas atlas-3gp48w-shard-0 [primary] population> db.zipcodes.aggregate([{$group:{_id:'$city',average_pop:{$avg:'$pop'}}}])
[
  { _id: 'MANCHACA', average_pop: 4049 },
  { _id: 'LUANA', average_pop: 388 },
  { _id: 'COLONY', average_pop: 559 },
  { _id: 'SAINT MICHAEL', average_pop: 2505.25 },
  { _id: 'FAULKNER', average_pop: 459 },
  { _id: 'CINCINNATI', average_pop: 14927.391304347826 },
  { _id: 'CAIRNBROOK', average_pop: 2178 },
  { _id: 'MC CASKILL', average_pop: 658 },
  { _id: 'KIANA', average_pop: 349 },
  { _id: 'RIEGELSVILLE', average_pop: 1924 },
  { _id: 'BRIMFIELD', average_pop: 2441.5 },
  { _id: 'FROSTPROOF', average_pop: 8747 },
  { _id: 'ART', average_pop: 24 },
  { _id: 'GUERNEVILLE', average_pop: 5060 },
  { _id: 'ELAND', average_pop: 1278 },
  { _id: 'HACKETT', average_pop: 1587 },
  { _id: 'PENNINGTON', average_pop: 2472.5 },
  { _id: 'POINTS', average_pop: 106 },
  { _id: 'HOWARD LAKE', average_pop: 3443 },
  { _id: 'HOKAH', average_pop: 1289 }
]
Type "it" for more




Atlas atlas-3gp48w-shard-0 [primary] population> db.zipcodes.aggregate([{$group:{_id:'$city',average_pop:{$avg:'$pop'}}},{$sort:{average_pop:-1}},{$limit:3}])
[
  { _id: 'BELL GARDENS', average_pop: 99568 },
  { _id: 'ARLETA', average_pop: 88114 },
  { _id: 'SOUTH GATE', average_pop: 87026 }
]
