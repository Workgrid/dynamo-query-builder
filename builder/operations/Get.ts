import QueryBuilder from '..'
import { chainable } from '../../utils'

import ExpressionAttributeNames from '../attributes/ExpressionAttributeNames'
import Key from '../attributes/Key'
import ProjectionExpression from '../attributes/ProjectionExpression'

export default class extends QueryBuilder {

  // Typescript privates only honoured prior to compilation, using tsconfig `stripInternal` as workaround
  /** @internal */ private Key = Key()
  /** @internal */ private ProjectionExpression = ProjectionExpression()
  /** @internal */ private ExpressionAttributeNames = ExpressionAttributeNames()

  // Expose public functions
  public setKeyCondition = chainable(this.Key.set, this)
  public addKeyProjection = chainable(this.ProjectionExpression.add, this)
  public addAliasToKey = chainable(this.ExpressionAttributeNames.add, this)

  // Public utility function
  public generateAliasForKey = this.ExpressionAttributeNames.generateAliasForKey

  public getConstructedQuery() {
    const query = super.getConstructedQuery()

    return {
      ...query,
      ...this.Key.get(),
      ...this.ProjectionExpression.get(),
      ...this.ExpressionAttributeNames.get()
    }
  }
}
