import QueryBuilder from '../'

import ConditionExpression from '../attributes/ConditionExpression'
import ExpressionAttributeNames from '../attributes/ExpressionAttributeNames'
import ExpressionAttributeValues from '../attributes/ExpressionAttributeValues'
import UpdateExpression from '../attributes/UpdateExpression'

const expressionAttributeValues = ExpressionAttributeValues()
const { get: getAttrValues } = expressionAttributeValues

const { get: getUpdateExp, add: addUpdateExpression } = UpdateExpression(expressionAttributeValues)
const { get: getConditionExp, add: addConditionExp } = ConditionExpression(expressionAttributeValues)
const { get: getAttrNames, add: addAttrName, generateAliasForKey } = ExpressionAttributeNames()

export default class extends QueryBuilder {

  /** Setters */
  public addUpdateExpression = addUpdateExpression
  public addConditionExpression = addConditionExp
  public addAliasToKey = addAttrName

  public generateAliasForKey = generateAliasForKey

  public getConstructedQuery() {
    const query = super.getConstructedQuery()

    return {
      ...query,
      ...getUpdateExp(),
      ...getAttrValues(),
      ...getConditionExp(),
      ...getAttrNames()
    }
  }
}
