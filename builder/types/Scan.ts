import QueryBuilder from '../'

import ExpressionAttributeNames from '../attributes/ExpressionAttributeNames'
import ExpressionAttributeValues from '../attributes/ExpressionAttributeValues'
import FilterExpression from '../attributes/FilterExpression'
import IndexName from '../attributes/IndexName'
import Limit from '../attributes/Limit'
import ProjectionExpression from '../attributes/ProjectionExpression'

/** Attribute modules */
const expressionAttributeValues = ExpressionAttributeValues(this)
const { get: getAttrValues } = expressionAttributeValues

const { get: getProjection, add: addProjection } = ProjectionExpression(this)
const { get: getAttrNames, add: addAttrName, generateAliasForKey } = ExpressionAttributeNames(this)
const { get: getFilterExp, add: addFilterExp } = FilterExpression(this, expressionAttributeValues)
const { get: getIndexName, set: setIndexName } = IndexName(this)
const { get: getLimit, set: setLimit } = Limit(this)

export default class extends QueryBuilder {

  /** Setters */
  public addKeyProjection = addProjection
  public addFilterExpression = addFilterExp
  public addAliasToKey = addAttrName
  public setIndexName = setIndexName
  public setLimit = setLimit

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
