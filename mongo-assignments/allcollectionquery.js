Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.users.find({},{_id:0,username:1})
[ { username: 'GoodGuyGreg' }, { username: 'Scumbagsteve' } ]

Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.posts.find()
[
  {
    _id: ObjectId("617d85eaeec2e86abd6a8054"),
    username: 'GoodGuyGreg',
    title: 'Passes out at party',
    body: 'Wakes up early and cleans house'
  },
  {
    _id: ObjectId("617d85eaeec2e86abd6a8055"),
    username: 'GoodGuyGreg',
    title: 'steals your identity',
    body: 'Raises your creditr score'
  },
  {
    _id: ObjectId("617d85eaeec2e86abd6a8056"),
    username: 'GoodGuyGreg',
    title: 'Reports a bug in your code',
    body: 'Sends you a pull Request'
  },
  {
    _id: ObjectId("617d85eaeec2e86abd6a8057"),
    username: 'ScumbagSteve',
    title: 'Borrows something',
    body: 'sells it'
  },
  {
    _id: ObjectId("617d85eaeec2e86abd6a8058"),
    username: 'ScumbagSteve',
    title: 'Borrows Everything',
    body: 'The End'
  },
  {
    _id: ObjectId("617d85eaeec2e86abd6a8059"),
    username: 'ScumbagSteve',
    title: 'Forks your repo on github',
    body: 'Sets to private'
  }
]
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.posts.find({username:'GoodGuyGreg'})
[
  {
    _id: ObjectId("617d85eaeec2e86abd6a8054"),
    username: 'GoodGuyGreg',
    title: 'Passes out at party',
    body: 'Wakes up early and cleans house'
  },
  {
    _id: ObjectId("617d85eaeec2e86abd6a8055"),
    username: 'GoodGuyGreg',
    title: 'steals your identity',
    body: 'Raises your creditr score'
  },
  {
    _id: ObjectId("617d85eaeec2e86abd6a8056"),
    username: 'GoodGuyGreg',
    title: 'Reports a bug in your code',
    body: 'Sends you a pull Request'
  }
]
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.posts.find({username:'ScumbagSteve'})
[
  {
    _id: ObjectId("617d85eaeec2e86abd6a8057"),
    username: 'ScumbagSteve',
    title: 'Borrows something',
    body: 'sells it'
  },
  {
    _id: ObjectId("617d85eaeec2e86abd6a8058"),
    username: 'ScumbagSteve',
    title: 'Borrows Everything',
    body: 'The End'
  },
  {
    _id: ObjectId("617d85eaeec2e86abd6a8059"),
    username: 'ScumbagSteve',
    title: 'Forks your repo on github',
    body: 'Sets to private'
  }
]
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.comments.find()
[
  {
    _id: ObjectId("617e617a46c73f571b455493"),
    username: 'GoodGuyGreg',
    comment: 'Hope you got a good deal',
    post: '617d85eaeec2e86abd6a8057'
  },
  {
    _id: ObjectId("617e62af46c73f571b455494"),
    username: 'GoodGuyGreg',
    comment: 'Whats mine is yours!',
    post: '617d85eaeec2e86abd6a8058'
  },
  {
    _id: ObjectId("617e637146c73f571b455495"),
    username: 'GoodGuyGreg',
    comment: 'Dont violate the licencing agreement!',
    post: '617d85eaeec2e86abd6a8059'
  },
  {
    _id: ObjectId("617e640146c73f571b455496"),
    username: 'ScumbagSteve',
    comment: 'It still isnt clean',
    post: '617d85eaeec2e86abd6a8054'
  },
  {
    _id: ObjectId("617e646446c73f571b455497"),
    username: 'ScumbagSteve',
    comment: 'Denied your PR cause i found a hack',
    post: '617d85eaeec2e86abd6a8056'
  }
]



Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.comments.find({username:'GoodGuyGreg'},{username:1,comment:1,_id:0})
[
  { username: 'GoodGuyGreg', comment: 'Hope you got a good deal' },
  { username: 'GoodGuyGreg', comment: 'Whats mine is yours!' },
  {
    username: 'GoodGuyGreg',
    comment: 'Dont violate the licencing agreement!'
  }
]


Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.comments.find({username:'ScumbagSteve'},{username:1,comment:1,_id:0})
[
  { username: 'ScumbagSteve', comment: 'It still isnt clean' },
  {
    username: 'ScumbagSteve',
    comment: 'Denied your PR cause i found a hack'
  }
]


Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.comments.find({post:'617d85eaeec2e86abd6a8056'})
[
  {
    _id: ObjectId("617e646446c73f571b455497"),
    username: 'ScumbagSteve',
    comment: 'Denied your PR cause i found a hack',
    post: '617d85eaeec2e86abd6a8056'
  }
]
