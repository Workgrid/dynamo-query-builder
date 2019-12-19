import QueryBuilder from '../'

import ExpressionAttributeNames from '../attributes/ExpressionAttributeNames'
import ExpressionAttributeValues from '../attributes/ExpressionAttributeValues'
import FilterExpression from '../attributes/FilterExpression'
import KeyConditionExpression from '../attributes/KeyConditionExpression'
import ProjectionExpression from '../attributes/ProjectionExpression'

/** Attribute modules */
const expressionAttributeValues = ExpressionAttributeValues(this)
const { get: getAttrValues } = expressionAttributeValues

const { get: getProjection, add: addProjection } = ProjectionExpression(this)
const { get: getAttrNames, add: addAttrName, generateAliasForKey } = ExpressionAttributeNames(this)
const { get: getKeyCondition, add: addKeyCondition } = KeyConditionExpression(this, expressionAttributeValues)
const { get: getFilterExp, add: addFilterExp } = FilterExpression(this, expressionAttributeValues)

export default class extends QueryBuilder {

  /** Setters */
  public addKeyCondition = addKeyCondition
  public addKeyProjection = addProjection
  public addFilterExpression = addFilterExp
  public addAliasToKey = addAttrName

  public generateAliasForKey = generateAliasForKey

  public getConstructedQuery() {
    const query = super.getConstructedQuery()

    return {
      ...query,
      ...getAttrValues(),
      ...getProjection(),
      ...getAttrNames(),
      ...getKeyCondition(),
      ...getFilterExp()
    }
  }
}
