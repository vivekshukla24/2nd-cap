Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.comments.insert({username:'GoodGuyGreg',comment:'Hope you got a good deal',post: '617d85eaeec2e86abd6a8057'})
DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("617e617a46c73f571b455493") }
}
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.comments.find()
[
  {
    _id: ObjectId("617e617a46c73f571b455493"),
    username: 'GoodGuyGreg',
    comment: 'Hope you got a good deal',
    post: '617d85eaeec2e86abd6a8057'
  }
]
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.comments.insertOne({username:'GoodGuyGreg',comment:'Whats mine is yours!',post: '617d85eaeec2e86abd6a8058'})
{
  acknowledged: true,
  insertedId: ObjectId("617e62af46c73f571b455494")
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.comments.insertOne({username:'GoodGuyGreg',comment:'Dont violate the licencing agreement!',post: '617d85eaeec2e86abd6a8059'})
{
  acknowledged: true,
  insertedId: ObjectId("617e637146c73f571b455495")
}
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.comments.insertOne({username:'ScumbagSteve',comment:'It still isnt clean',post:'617d85eaeec2e86abd6a8054'})
{
  acknowledged: true,
  insertedId: ObjectId("617e640146c73f571b455496")
}
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.comments.insertOne({username:'ScumbagSteve',commAtlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.comments.insertOne({username:'ScumbagSteve',comment:'Denied your PR cause i found a hack',post:'617d85eaeec2e86abd6a8056'})
{
  acknowledged: true,
  insertedId: ObjectId("617e646446c73f571b455497")
}
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
