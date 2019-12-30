import QueryBuilder from '..'
import { chainable } from '../../utils'

import ExclusiveStartKey from '../attributes/ExclusiveStartKey'
import ExpressionAttributeNames from '../attributes/ExpressionAttributeNames'
import ExpressionAttributeValues from '../attributes/ExpressionAttributeValues'
import FilterExpression from '../attributes/FilterExpression'
import IndexName from '../attributes/IndexName'
import KeyConditionExpression from '../attributes/KeyConditionExpression'
import ProjectionExpression from '../attributes/ProjectionExpression'

/** Attribute modules */
const expressionAttributeValues = ExpressionAttributeValues()
const { get: getAttrValues } = expressionAttributeValues

const { get: getProjection, add: addProjection } = ProjectionExpression()
const { get: getAttrNames, add: addAttrName, generateAliasForKey } = ExpressionAttributeNames()
const { get: getKeyCondition, add: addKeyCondition } = KeyConditionExpression(expressionAttributeValues)
const { get: getIndexName, set: setIndexName } = IndexName()
const { get: getFilterExp, add: addFilterExp } = FilterExpression(expressionAttributeValues)
const { get: getStartKeys, set: setStartKeys } = ExclusiveStartKey()

export default class extends QueryBuilder {

  /** Setters */
  public addKeyCondition = chainable(addKeyCondition, this)
  public addKeyProjection = chainable(addProjection, this)
  public addFilterExpression = chainable(addFilterExp, this)
  public setIndexName = chainable(setIndexName, this)
  public addAliasToKey = chainable(addAttrName, this)
  public setExclusiveStartKey = chainable(setStartKeys, this)

  public generateAliasForKey = generateAliasForKey

  public getConstructedQuery() {
    const query = super.getConstructedQuery()

    return {
      ...query,
      ...getAttrValues(),
      ...getProjection(),
      ...getAttrNames(),
      ...getKeyCondition(),
      ...getFilterExp(),
      ...getStartKeys(),
      ...getIndexName()
    }
  }
}
