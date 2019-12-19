import { ConstructPut } from '../'

const query = new ConstructPut('tableName')
  .setItem({
    id: 123, // numbers,
    name: 'Mark', // strings,
    isActive: true // and booleans supported
  })
  .getConstructedQuery()

console.log(query)