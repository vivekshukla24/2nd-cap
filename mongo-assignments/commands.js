Atlas atlas-3gp48w-shard-0 [primary] myFirstDatabase> show dbs
admin   340 kB
local  11.1 GB
Atlas atlas-3gp48w-shard-0 [primary] myFirstDatabase> use mongo_practice
switched to db mongo_practice
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> show dbs
admin   340 kB
local  11.1 GB
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> use mongo_practice
already on db mongo_practice
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.insertOne({title: 'Fight club', writer: 'Chcuck Palahniuko', year: 1999, actors: {'Brad Pitt','Edward Norton'}})
Uncaught:
SyntaxError: Unexpected token (1:103)

> 1 | db.movies.insertOne({title: 'Fight club', writer: 'Chcuck Palahniuko', year: 1999, actors: {'Brad Pitt','Edward Norton'}})
    |                                                                                                        ^
  2 |

Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.insertOne({title: 'Fight club', writer: 'Chcuck Palahniuko', year: 1999, actors: ['Brad Pitt','Edward Norton']})
{
  acknowledged: true,
  insertedId: ObjectId("617c1509bb4c08c65637bd19")
}
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db show
Uncaught:
SyntaxError: Missing semicolon. (1:2)

> 1 | db show
    |   ^
  2 |

Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db show
Uncaught:
SyntaxError: Missing semicolon. (1:2)

> 1 | db show
    |   ^
  2 |

Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> show dbs
mongo_practice    41 kB
admin            340 kB
local           11.1 GB
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.find()
[
  {
    _id: ObjectId("617c1509bb4c08c65637bd19"),
    title: 'Fight club',
    writer: 'Chcuck Palahniuko',
    year: 1999,
    actors: [ 'Brad Pitt', 'Edward Norton' ]
  }
]
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.insertOne({title: 'Pulp Fiction', writer: 'Quentin Tarantino', year: 1994, actors: ['John Travolta','Uma Thurman']})
{
  acknowledged: true,
  insertedId: ObjectId("617c167cbb4c08c65637bd1a")
}
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.find()
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
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.insertOne({title: 'Inglorious Bastards', writer: 'Quentin Tarantino', year: 2009, actors: ['Brad Pitt','Diane Kruger','Eli roth']})
{
  acknowledged: true,
  insertedId: ObjectId("617c178ebb4c08c65637bd1b")
}
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.insertOne({title: 'Inglorious Bastards', writer: 'J.R.R Tolkein', year: 2012, franchise: 'The Hobbit'})
{
  acknowledged: true,
  insertedId: ObjectId("617c1808bb4c08c65637bd1c")
}
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.find()
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
  },
  {
    _id: ObjectId("617c178ebb4c08c65637bd1b"),
    title: 'Inglorious Bastards',
    writer: 'Quentin Tarantino',
    year: 2009,
    actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli roth' ]
  },
  {
    _id: ObjectId("617c1808bb4c08c65637bd1c"),
    title: 'Inglorious Bastards',
    writer: 'J.R.R Tolkein',
    year: 2012,
    franchise: 'The Hobbit'
  }
]
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.update({year:2012,{$set:{title: 'THe Hobbit: An Unexpected journey'}})
Uncaught:
SyntaxError: Unexpected token (1:28)

> 1 | db.movies.update({year:2012,{$set:{title: 'THe Hobbit: An Unexpected journey'}})
    |                             ^
  2 |

Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.update({year:2012} ,{$set:{title: 'THe Hobbit: An Unexpected journey'}})
DeprecationWarning: Collection.update() is deprecated. Use updateOne, updateMany, or bulkWrite.
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.find()
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
  },
  {
    _id: ObjectId("617c178ebb4c08c65637bd1b"),
    title: 'Inglorious Bastards',
    writer: 'Quentin Tarantino',
    year: 2009,
    actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli roth' ]
  },
  {
    _id: ObjectId("617c1808bb4c08c65637bd1c"),
    title: 'THe Hobbit: An Unexpected journey',
    writer: 'J.R.R Tolkein',
    year: 2012,
    franchise: 'The Hobbit'
  }
]
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.insertOne({title: 'The Hobbit: The Desolation of Smaug', writer: 'J.R.R Tolkein', year: 2013, franchise: 'The Hobbit'})
{
  acknowledged: true,
  insertedId: ObjectId("617c1a9bbb4c08c65637bd1d")
}
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.insertOne({title: 'The Hobbit: The Battle of the five armies', writer: 'J.R.R Tolkein', year: 2012, franchise: 'The Hobbit', synopsis: 'Bilbo and company are force to engage in a war against an array of caombatants and keep the lonely mountain from falling into the hands of a rising darkness'})
{
  acknowledged: true,
  insertedId: ObjectId("617c1b42bb4c08c65637bd1e")
}
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.find()
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
  },
  {
    _id: ObjectId("617c178ebb4c08c65637bd1b"),
    title: 'Inglorious Bastards',
    writer: 'Quentin Tarantino',
    year: 2009,
    actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli roth' ]
  },
  {
    _id: ObjectId("617c1808bb4c08c65637bd1c"),
    title: 'THe Hobbit: An Unexpected journey',
    writer: 'J.R.R Tolkein',
    year: 2012,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId("617c1a9bbb4c08c65637bd1d"),
    title: 'The Hobbit: The Desolation of Smaug',
    writer: 'J.R.R Tolkein',
    year: 2013,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId("617c1b42bb4c08c65637bd1e"),
    title: 'The Hobbit: The Battle of the five armies',
    writer: 'J.R.R Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'Bilbo and company are force to engage in a war against an array of caombatants and keep the lonely mountain from falling into the hands of a rising darkness'
  }
]
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.insertMany([{title: 'Pee Wee Hermans big adventure'}, {title: 'Avatar'}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("617c1bcbbb4c08c65637bd1f"),
    '1': ObjectId("617c1bcbbb4c08c65637bd20")
  }
}
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.find()
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
  },
  {
    _id: ObjectId("617c178ebb4c08c65637bd1b"),
    title: 'Inglorious Bastards',
    writer: 'Quentin Tarantino',
    year: 2009,
    actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli roth' ]
  },
  {
    _id: ObjectId("617c1808bb4c08c65637bd1c"),
    title: 'THe Hobbit: An Unexpected journey',
    writer: 'J.R.R Tolkein',
    year: 2012,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId("617c1a9bbb4c08c65637bd1d"),
    title: 'The Hobbit: The Desolation of Smaug',
    writer: 'J.R.R Tolkein',
    year: 2013,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId("617c1b42bb4c08c65637bd1e"),
    title: 'The Hobbit: The Battle of the five armies',
    writer: 'J.R.R Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'Bilbo and company are force to engage in a war against an array of caombatants and keep the lonely mountain from falling into the hands of a rising darkness'
  },
  {
    _id: ObjectId("617c1bcbbb4c08c65637bd1f"),
    title: 'Pee Wee Hermans big adventure'
  },
  { _id: ObjectId("617c1bcbbb4c08c65637bd20"), title: 'Avatar' }
]
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.find({year:2012})
[
  {
    _id: ObjectId("617c1808bb4c08c65637bd1c"),
    title: 'THe Hobbit: An Unexpected journey',
    writer: 'J.R.R Tolkein',
    year: 2012,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId("617c1b42bb4c08c65637bd1e"),
    title: 'The Hobbit: The Battle of the five armies',
    writer: 'J.R.R Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'Bilbo and company are force to engage in a war against an array of caombatants and keep the lonely mountain from falling into the hands of a rising darkness'
  }
]
