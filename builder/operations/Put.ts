import QueryBuilder from '..'
import { chainable } from '../../utils'

import ConditionExpression from '../attributes/ConditionExpression'
import ExpressionAttributeNames from '../attributes/ExpressionAttributeNames'
import ExpressionAttributeValues from '../attributes/ExpressionAttributeValues'
import Item from '../attributes/Item'

export default class extends QueryBuilder {

  // Typescript privates only honoured prior to compilation, using tsconfig `stripInternal` as workaround
  /** @internal */ private ExpressionAttributeValues = ExpressionAttributeValues()
  /** @internal */ private Item = Item()
  /** @internal */ private ExpressionAttributeNames = ExpressionAttributeNames()
  /** @internal */ private ConditionExpression = ConditionExpression(this.ExpressionAttributeValues)

  // Exposed function renaming
  public setItem = chainable(this.Item.set, this)
  public addCondition = chainable(this.ConditionExpression.add, this)
  public addAliasToKey = chainable(this.ExpressionAttributeNames.add, this)

  public generateAliasForKey = this.ExpressionAttributeNames.generateAliasForKey

  public getConstructedQuery() {
    const query = super.getConstructedQuery()

    return {
      ...query,
      ...this.Item.get(),
      ...this.ConditionExpression.get(),
      ...this.ExpressionAttributeValues.get(),
      ...this.ExpressionAttributeNames.get()
    }
  }
}
