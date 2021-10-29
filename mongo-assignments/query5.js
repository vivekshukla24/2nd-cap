Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.find({year:{$gt:1989,$lt:2001}})
[
  {
    _id: ObjectId("617c1509bb4c08c65637bd19"),
    title: 'Fight club',
    writer: 'Chcuck Palahniuko',
    year: 1999,
    actors: [ 'Brad Pitt', 'Edward Norton' ]
  },
  {
    _id: ObjectId("617c167cbb4c08c65637bd1a"),
    title: 'Pulp Fiction',
    writer: 'Quentin Tarantino',
    year: 1994,
    actors: [ 'John Travolta', 'Uma Thurman' ]
  }
]
