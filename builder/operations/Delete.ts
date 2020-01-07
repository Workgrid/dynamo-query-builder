import QueryBuilder from '..'
import { chainable } from '../../utils'

import ConditionExpression from '../attributes/ConditionExpression'
import ExpressionAttributeNames from '../attributes/ExpressionAttributeNames'
import ExpressionAttributeValues from '../attributes/ExpressionAttributeValues'
import Key from '../attributes/Key'
import ProjectionExpression from '../attributes/ProjectionExpression'

export default class extends QueryBuilder {

  // Typescript privates only honoured prior to compilation, using tsconfig `stripInternal` as workaround
  /** @internal */ private Key = Key()
  /** @internal */ private ExpressionAttributeValues = ExpressionAttributeValues()
  /** @internal */ private ProjectionExpression = ProjectionExpression()
  /** @internal */ private ExpressionAttributeNames = ExpressionAttributeNames()
  /** @internal */ private ConditionExpression = ConditionExpression(this.ExpressionAttributeValues)

  // Setters
  public setKeyCondition = chainable(this.Key.set, this)
  public addKeyProjection = chainable(this.ProjectionExpression.add, this)
  public addConditionExpression = chainable(this.ConditionExpression.add, this)
  public addExpressionAttrValue = chainable(this.ExpressionAttributeValues.add, this)
  public addAliasToKey = chainable(this.ExpressionAttributeNames.add, this)

  /** Public utility function */
  public generateAliasForKey = this.ExpressionAttributeNames.generateAliasForKey

  public getConstructedQuery() {
    const query = super.getConstructedQuery()
    return {
      ...query,
      ...this.Key.get(),
      ...this.ProjectionExpression.get(),
      ...this.ExpressionAttributeNames.get(),
      ...this.ConditionExpression.get(),
      ...this.ExpressionAttributeValues.get()
    }
  }
}
