import QueryBuilder from '..'
import { chainable } from '../../utils'

import ExclusiveStartKey from '../attributes/ExclusiveStartKey'
import ExpressionAttributeNames from '../attributes/ExpressionAttributeNames'
import ExpressionAttributeValues from '../attributes/ExpressionAttributeValues'
import FilterExpression from '../attributes/FilterExpression'
import IndexName from '../attributes/IndexName'
import KeyConditionExpression from '../attributes/KeyConditionExpression'
import ProjectionExpression from '../attributes/ProjectionExpression'

export default class extends QueryBuilder {

  // Typescript privates only honoured prior to compilation, using tsconfig `stripInternal` as workaround
  /** @internal */ private ExpressionAttributeValues = ExpressionAttributeValues()
  /** @internal */ private ProjectionExpression = ProjectionExpression()
  /** @internal */ private ExpressionAttributeNames = ExpressionAttributeNames()
  /** @internal */ private KeyConditionExpression = KeyConditionExpression(this.ExpressionAttributeValues)
  /** @internal */ private IndexName = IndexName()
  /** @internal */ private FilterExpression = FilterExpression(this.ExpressionAttributeValues)
  /** @internal */ private ExclusiveStartKey = ExclusiveStartKey()

  // Setters
  public addKeyCondition = chainable(this.KeyConditionExpression.add, this)
  public addKeyProjection = chainable(this.ProjectionExpression.add, this)
  public addFilterExpression = chainable(this.FilterExpression.add, this)
  public setIndexName = chainable(this.IndexName.set, this)
  public addAliasToKey = chainable(this.ExpressionAttributeNames.add, this)
  public setExclusiveStartKey = chainable(this.ExclusiveStartKey.set, this)

  public generateAliasForKey = this.ExpressionAttributeNames.generateAliasForKey

  public getConstructedQuery() {
    const query = super.getConstructedQuery()

    return {
      ...query,
      ...this.ExpressionAttributeValues.get(),
      ...this.ProjectionExpression.get(),
      ...this.ExpressionAttributeNames.get(),
      ...this.KeyConditionExpression.get(),
      ...this.FilterExpression.get(),
      ...this.ExclusiveStartKey.get(),
      ...this.IndexName.get()
    }
  }
}
