import QueryBuilder from '../'

import ConditionExpression from '../attributes/ConditionExpression'
import ExpressionAttributeNames from '../attributes/ExpressionAttributeNames'
import ExpressionAttributeValues from '../attributes/ExpressionAttributeValues'
import Item from '../attributes/Item'

// Shared attribute
const expressionAttributeValues = ExpressionAttributeValues()
const { get: getAttrValues } = expressionAttributeValues

const { get: getItem, set: setItem } = Item()
const { get: getAttrNames, add: addAttrName, generateAliasForKey} = ExpressionAttributeNames()
const { get: getConditionExp, add: addConditionExp } = ConditionExpression(expressionAttributeValues)

export default class extends QueryBuilder {

  // Exposed function renaming
  public setItem = setItem
  public addCondition = addConditionExp
  public addAliasToKey = addAttrName
  public generateAliasForKey = generateAliasForKey

  public getConstructedQuery() {
    const query = super.getConstructedQuery()

    return {
      ...query,
      ...getItem(),
      ...getConditionExp(),
      ...getAttrValues(),
      ...getAttrNames()
    }
  }
}
