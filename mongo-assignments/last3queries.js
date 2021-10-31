Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.update({title:'THe Hobbit: An Unexpected journey'},{$set:{synopsis: 'A reluctant hobbit,bilbo baggins, sets out to the lonely mountain with a spirited gorup of dwareves to reclaim thier mountain home - and the gold within it-from the dragon smaug'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.update({title:'The Hobbit: The Desolation of Smaug'},{$set:{synopsis: 'The dwarves, along with bilbo baggins and gandalf the grey, continue thier quest top reclaim erebor, thier homeland form smaug.Bilbo baggins is in possesion of a mysterious and magical ring'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.update({title:'Pulp Fiction'},{$set:{actors:['Samuel L. Jsckson']}})
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
    actors: [ 'Samuel L. Jsckson' ]
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
    franchise: 'The Hobbit',
    synopsis: 'The dwarves, along with bilbo baggins and gandalf the grey, continue thier quest top reclaim erebor, thier homeland form smaug.Bilbo baggins is in possesion of a mysterious and magical ring'
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
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.update({title:'Pulp Fiction'},{$set:{actors:['John Travolta','Uma Thurman' ,'Samuel L. Jsckson']}})
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
    actors: [ 'John Travolta', 'Uma Thurman', 'Samuel L. Jsckson' ]
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
    franchise: 'The Hobbit',
    synopsis: 'The dwarves, along with bilbo baggins and gandalf the grey, continue thier quest top reclaim erebor, thier homeland form smaug.Bilbo baggins is in possesion of a mysterious and magical ring'
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
