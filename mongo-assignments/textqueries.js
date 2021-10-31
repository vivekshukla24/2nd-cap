Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.getIndexes()
[ { v: 2, key: { _id: 1 }, name: '_id_' } ]
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.createIndex({synopsis:"text"})
synopsis_text
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.getIndexes()
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  {
    v: 2,
    key: { _fts: 'text', _ftsx: 1 },
    name: 'synopsis_text',
    weights: { synopsis: 1 },
    default_language: 'english',
    language_override: 'language',
    textIndexVersion: 3
  }
]
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> dbd.movies.find({$text:{$search:"bilbo"}})
ReferenceError: dbd is not defined
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.find({$text:{$search:"bilbo"}})
[
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
  }
]
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.find({$text:{$search:"gandalf"}})
[
  {
    _id: ObjectId("617c1a9bbb4c08c65637bd1d"),
    title: 'The Hobbit: The Desolation of Smaug',
    writer: 'J.R.R Tolkein',
    year: 2013,
    franchise: 'The Hobbit',
    synopsis: 'The dwarves, along with bilbo baggins and gandalf the grey, continue thier quest top reclaim erebor, thier homeland form smaug.Bilbo baggins is in possesion of a mysterious and magical ring'
  }
]
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.find({$text:{$search:"bilbo -gandalf"}})
[
  {
    _id: ObjectId("617c1b42bb4c08c65637bd1e"),
    title: 'The Hobbit: The Battle of the five armies',
    writer: 'J.R.R Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'Bilbo and company are force to engage in a war against an array of caombatants and keep the lonely mountain from falling into the hands of a rising darkness'
  }
]
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.find({$text:{$search:"dwarves hobbit"}})
[
  {
    _id: ObjectId("617c1a9bbb4c08c65637bd1d"),
    title: 'The Hobbit: The Desolation of Smaug',
    writer: 'J.R.R Tolkein',
    year: 2013,
    franchise: 'The Hobbit',
    synopsis: 'The dwarves, along with bilbo baggins and gandalf the grey, continue thier quest top reclaim erebor, thier homeland form smaug.Bilbo baggins is in possesion of a mysterious and magical ring'
  }
]

Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.find({ $text:{$search:"gold"},$text:{$search:"dragon"}})
[
  {
    _id: ObjectId("617c1808bb4c08c65637bd1c"),
    title: 'THe Hobbit: An Unexpected journey',
    writer: 'J.R.R Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'A reluctant hobbit,bilbo baggins, sets out to the lonely mountain with a spirited gorup of dwareves to reclaim thier mountain home - and the gold within it-from the dragon smaug'
  }
]
