import { ConstructGet } from '../index'
const builder = new ConstructGet('myTable')

const query = builder
  .setKeyCondition('myKey', 55)
  .setKeyCondition('anotherKey', 'stringType')
  .getConstructedQuery()

console.log(query)
