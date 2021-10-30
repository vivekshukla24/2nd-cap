Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.createCollection("Users")
{ ok: 1 }
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> show collection
MongoshInvalidInputError: [COMMON-10001] 'collection' is not a valid argument for "show".
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> show collections
movies
Users
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.users.insert({username:'GoodGuyGreg', first_name:'Good Guy',last_name:'Greg'})
DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("617d7adceec2e86abd6a8052") }
}
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.users.find()
[
  {
    _id: ObjectId("617d7adceec2e86abd6a8052"),
    username: 'GoodGuyGreg',
    first_name: 'Good Guy',
    last_name: 'Greg'
  }
]
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.users.insert({username:'Scumbagsteve', full_name:[{ first:'Scumbag',last:'Steve'}]})
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("617d7b47eec2e86abd6a8053") }
}
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.users.find()
[
  {
    _id: ObjectId("617d7adceec2e86abd6a8052"),
    username: 'GoodGuyGreg',
    first_name: 'Good Guy',
    last_name: 'Greg'
  },
  {
    _id: ObjectId("617d7b47eec2e86abd6a8053"),
    username: 'Scumbagsteve',
    full_name: [ { first: 'Scumbag', last: 'Steve' } ]
  }
]
