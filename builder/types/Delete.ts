import QueryBuilder from '../'

import ConditionExpression from '../attributes/ConditionExpression'
import ExpressionAttributeNames from '../attributes/ExpressionAttributeNames'
import ExpressionAttributeValues from '../attributes/ExpressionAttributeValues'
import Key from '../attributes/Key'
import ProjectionExpression from '../attributes/ProjectionExpression'

// Shared attribute
const expressionAttributeValues = ExpressionAttributeValues(this)

// Destructuring attributes
const { get: getAttrValues, add: addAttrValue } = expressionAttributeValues
const { get: getKey, set: setKey } = Key(this)
const { get: getProjection, add: addProjection } = ProjectionExpression(this)
const { get: getAttrNames, add: addAttrName, generateAliasForKey } = ExpressionAttributeNames(this)
const { get: getConditionExp, add: addConditionExp } = ConditionExpression(this, expressionAttributeValues)

export default class extends QueryBuilder {

  /** Setters */
  public setKeyCondition = setKey
  public addKeyProjection = addProjection
  public addConditionExpression = addConditionExp
  public addExpressionAttrValue = addAttrValue
  public addAliasToKey = addAttrName

  /** Public utility function */
  public generateAliasForKey = generateAliasForKey

  public getConstructedQuery() {
    const query = super.getConstructedQuery()

    return {
      ...query,
      ...getKey(),
      ...getProjection(),
      ...getAttrNames(),
      ...getConditionExp(),
      ...getAttrValues()
    }
  }
}
