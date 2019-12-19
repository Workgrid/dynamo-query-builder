import QueryBuilder from '../'

import ExpressionAttributeNames from '../attributes/ExpressionAttributeNames'
import Key from '../attributes/Key'
import ProjectionExpression from '../attributes/ProjectionExpression'

/** Attribute modules */
const { get: getKey, set: setKey } = Key()
const { get: getProjection, add: addProjection } = ProjectionExpression()
const { get: getAttrNames, add: addAttrName, generateAliasForKey } = ExpressionAttributeNames()

export default class extends QueryBuilder {

  /** Expose public functions */
  public setKeyCondition = setKey
  public addKeyProjection = addProjection
  public addAliasToKey = addAttrName

  /** Public utility function */
  public generateAliasForKey = generateAliasForKey

  public getConstructedQuery() {
    const query = super.getConstructedQuery()

    return {
      ...query,
      ...getKey(),
      ...getProjection(),
      ...getAttrNames()
    }
  }
}
