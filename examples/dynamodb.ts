import { ConstructQuery } from '../index'
const builder = new ConstructQuery('myTable') 
// TODO: Where types come from ???
const query = builder
  .addKeyCondition('name', 'Mark')
  .addKeyCondition('age', 50, '<') // age < 25
  .getConstructedQuery()

console.log(query)
