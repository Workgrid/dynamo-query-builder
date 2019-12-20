import QueryBuilder from '..'
import { chainable } from '../../utils'

import ConditionExpression from '../attributes/ConditionExpression'
import ExpressionAttributeNames from '../attributes/ExpressionAttributeNames'
import ExpressionAttributeValues from '../attributes/ExpressionAttributeValues'
import Key from '../attributes/Key'
import ProjectionExpression from '../attributes/ProjectionExpression'

// Shared attribute
const expressionAttributeValues = ExpressionAttributeValues()

// Destructuring attributes
const { get: getAttrValues, add: addAttrValue } = expressionAttributeValues
const { get: getKey, set: setKey } = Key()
const { get: getProjection, add: addProjection } = ProjectionExpression()
const { get: getAttrNames, add: addAttrName, generateAliasForKey } = ExpressionAttributeNames()
const { get: getConditionExp, add: addConditionExp } = ConditionExpression(expressionAttributeValues)

export default class extends QueryBuilder {

  /** Setters */
  public setKeyCondition = chainable(setKey, this)
  public addKeyProjection = chainable(addProjection, this)
  public addConditionExpression = chainable(addConditionExp, this)
  public addExpressionAttrValue = chainable(addAttrValue, this)
  public addAliasToKey = chainable(addAttrName, this)

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
