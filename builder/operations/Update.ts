import QueryBuilder from '..'
import { chainable } from '../../utils'

import ConditionExpression from '../attributes/ConditionExpression'
import ExpressionAttributeNames from '../attributes/ExpressionAttributeNames'
import ExpressionAttributeValues from '../attributes/ExpressionAttributeValues'
import Key from '../attributes/Key'
import UpdateExpression from '../attributes/UpdateExpression'

export default class extends QueryBuilder {

  // Typescript privates only honoured prior to compilation, using tsconfig `stripInternal` as workaround
  /** @internal */ private ExpressionAttributeValues = ExpressionAttributeValues()
  /** @internal */ private Key = Key()
  /** @internal */ private UpdateExpression = UpdateExpression(this.ExpressionAttributeValues)
  /** @internal */ private ConditionExpression = ConditionExpression(this.ExpressionAttributeValues)
  /** @internal */ private ExpressionAttributeNames = ExpressionAttributeNames()

  /** Setters */
  public setKeyCondition = chainable(this.Key.set, this)
  public addUpdateExpression = chainable(this.UpdateExpression.add, this)
  public addConditionExpression = chainable(this.ConditionExpression.add, this)
  public addAliasToKey = chainable(this.ExpressionAttributeNames.add, this)

  public generateAliasForKey = this.ExpressionAttributeNames.generateAliasForKey

  public getConstructedQuery() {
    const query = super.getConstructedQuery()

    return {
      ...query,
      ...this.UpdateExpression.get(),
      ...this.ExpressionAttributeValues.get(),
      ...this.ConditionExpression.get(),
      ...this.ExpressionAttributeNames.get(),
      ...this.Key.get()
    }
  }
}
