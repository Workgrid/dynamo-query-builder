import QueryBuilder from '..'
import { chainable } from '../../utils'

import ExpressionAttributeNames from '../attributes/ExpressionAttributeNames'
import ExpressionAttributeValues from '../attributes/ExpressionAttributeValues'
import FilterExpression from '../attributes/FilterExpression'
import IndexName from '../attributes/IndexName'
import Limit from '../attributes/Limit'
import ProjectionExpression from '../attributes/ProjectionExpression'

/** Attribute modules */
const expressionAttributeValues = ExpressionAttributeValues()
const { get: getAttrValues } = expressionAttributeValues

const { get: getProjection, add: addProjection } = ProjectionExpression()
const { get: getAttrNames, add: addAttrName, generateAliasForKey } = ExpressionAttributeNames()
const { get: getFilterExp, add: addFilterExp } = FilterExpression(expressionAttributeValues)
const { get: getIndexName, set: setIndexName } = IndexName()
const { get: getLimit, set: setLimit } = Limit()

export default class extends QueryBuilder {

  /** Setters */
  public addKeyProjection = chainable(addProjection, this)
  public addFilterExpression = chainable(addFilterExp, this)
  public addAliasToKey = chainable(addAttrName, this)
  public setIndexName = chainable(setIndexName, this)
  public setLimit = chainable(setLimit, this)

  public generateAliasForKey = generateAliasForKey

  public getConstructedQuery() {
    const query = super.getConstructedQuery()

    return {
      ...query,
      ...getAttrValues(),
      ...getProjection(),
      ...getAttrNames(),
      ...getFilterExp(),
      ...getIndexName(),
      ...getLimit()
    }
  }
}
