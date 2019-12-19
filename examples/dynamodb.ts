import { BuilderType, ConstructQuery } from '../index'

const builder = new ConstructQuery('myTable', BuilderType.DynamoDB)
const query = builder
  .addKeyCondition('name', 'Mark')
  .addKeyCondition('age', 50, '<') // age < 25
  .getConstructedQuery()

console.log(query)
