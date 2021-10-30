Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.createCollection("posts")
{ ok: 1 }
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> show collections
movies
posts
users
Users
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.Users.find()
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.Users.drop()
true
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> show collections
movies
posts
users
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.posts.insertMany([{username:'GoodGuyGreg',title:'Passes out at party',body:'Wakes up early and cleans house'}, {username:'GoodGuyGreg',title:'steals your identity',body:'Raises your creditr score'},{username:'GoodGuyGreg',title:'Reports a bug in your code',body:'Sends you a pull Request'},{username:'ScumbagSteve',title:'Borrows something',body:'sells it'},{username:'ScumbagSteve',title:'Borrows Everything',body:'The End'},{username:'ScumbagSteve', title:'Forks your repo on github', body:'Sets to private'}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("617d85eaeec2e86abd6a8054"),
    '1': ObjectId("617d85eaeec2e86abd6a8055"),
    '2': ObjectId("617d85eaeec2e86abd6a8056"),
    '3': ObjectId("617d85eaeec2e86abd6a8057"),
    '4': ObjectId("617d85eaeec2e86abd6a8058"),
    '5': ObjectId("617d85eaeec2e86abd6a8059")
  }
}
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
