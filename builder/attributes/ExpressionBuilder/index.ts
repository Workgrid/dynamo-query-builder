import { AttributeTypes } from './interfaces/AttributeTypes'
import { ConditionTypes, ICondition, IExpression, IValue } from './interfaces/Expressions'
import { JoinerTypes } from './interfaces/Joiner'
import { OperatorTypes } from './interfaces/OperatorTypes'

// Lame way to keep each sub-expression unqiue
let atomicIndex = 0
const generateAlias = () => {
  atomicIndex++
  return `:val${atomicIndex}`
}

export class Expression {
  public values: IValue[] = []
  private conditions: IExpression[] = []

  public and(subQuery?: Expression) {
    this.conditions.push({ type: ConditionTypes.JOINER, condition: JoinerTypes.AND })
    if (subQuery) {
      this.conditions.push({ type: ConditionTypes.RAW, condition: subQuery.toString(true) })
    }
    return this
  }

  public or(subQuery?: Expression) {
    this.conditions.push({ type: ConditionTypes.JOINER, condition: JoinerTypes.OR })
    if (subQuery) {
      this.conditions.push({ type: ConditionTypes.RAW, condition: subQuery.toString(true) })
    }
    return this
  }

  /**
   * @param {string} key
   * @param {OperatorTypes | any} param1 - Value of key or an expression operator
   * @param {any | undefined} param2 - Value of key
   */
  public where(key: string, param1: OperatorTypes | any, param2?: any | undefined) {
    if (this.conditions.length > 0) {
      if (this.conditions[this.conditions.length - 1].type !== ConditionTypes.JOINER) {
        this.and()
      }
    }

    if (param2 === undefined) { // Has not supplied operator, default to equals

      const valueAlias = generateAlias()
      this.values.push({ value: param1, alias: valueAlias })

      this.conditions.push({
        type: ConditionTypes.WHERE,
        condition: { keyName: key, operatorType: OperatorTypes.EQUALS, value: valueAlias }
      })
    } else { // Has supplied operator, use it insteadå

      const valueAlias = generateAlias()
      this.values.push({ value: param2, alias: valueAlias })

      this.conditions.push({
        type: ConditionTypes.WHERE,
        condition: { keyName: key, operatorType: param1, value: valueAlias }
      })
    }
    return this
  }
  public whereBetween(key: string, firstValue: number, secondValue: number) {
    if (this.conditions.length > 0) {
      if (this.conditions[this.conditions.length - 1].type !== ConditionTypes.JOINER) {
        this.and()
      }
    }

    const firstValueAlias = generateAlias()
    this.values.push({ value: firstValue, alias: firstValueAlias })

    const secondValueAlias = generateAlias()
    this.values.push({ value: secondValue, alias: secondValueAlias })

    this.conditions.push({
      type: ConditionTypes.WHERE_BETWEEN,
      condition: {
        keyName: key,
        operatorType: OperatorTypes.BETWEEN,
        value: firstValueAlias,
        secondValue: secondValueAlias
      }
    })
    return this
  }
  public whereIn(key: string, values: Array<string | number>) {
    if (this.conditions.length > 0) {
      if (this.conditions[this.conditions.length - 1].type !== ConditionTypes.JOINER) {
        this.and()
      }
    }

    const aliases = values.map((value) => {
      const valueAlias = generateAlias()
      this.values.push({ value, alias: valueAlias })
      return valueAlias
    })

    this.conditions.push({
      type: ConditionTypes.WHERE_IN,
      condition: {
        keyName: key,
        operatorType: OperatorTypes.IN,
        value: `(${aliases.join(', ')})`
      }
    })
    return this
  }
  public attributeExists(key: string) {
    this.conditions.push({
      type: ConditionTypes.RAW,
      condition: `attribute_exists(${key})`
    })
    return this
  }
  public attributeNotExists(key: string) {
    this.conditions.push({
      type: ConditionTypes.RAW,
      condition: `attribute_not_exists(${key})`
    })
    return this
  }
  public attributeType(key: string, type: AttributeTypes) {
    // For some reason, these attributes need their own alias
    const valueAlias = generateAlias()
    this.values.push({ value: type, alias: valueAlias })

    this.conditions.push({
      type: ConditionTypes.RAW,
      condition: `attribute_type(${key}, ${valueAlias})`
    })
    return this
  }
  public beginsWith(key: string, beginStr: string) {
    const valueAlias = generateAlias()
    this.values.push({ value: beginStr, alias: valueAlias })

    this.conditions.push({
      type: ConditionTypes.RAW,
      condition: `begins_with(${key}, ${valueAlias})`
    })
    return this
  }
  public contains(key: string, valueSet: Array<string | number>) {
    const valueAlias = generateAlias()
    this.values.push({ value: valueSet, alias: valueAlias })

    this.conditions.push({
      type: ConditionTypes.RAW,
      condition: `contains (${key}, ${valueAlias})`
    })
    return this
  }
  public toString(isSub?: boolean) {
    const stringifiedConditions = this.conditions.map((condition) => {
      switch (condition.type) {
        case ConditionTypes.WHERE:
        case ConditionTypes.WHERE_IN:
        case ConditionTypes.WHERE_BETWEEN:
          const whereExpr = condition.condition as ICondition

          const value = (whereExpr.secondValue) ? `${whereExpr.value} AND ${whereExpr.secondValue}` : whereExpr.value
          return `${whereExpr.keyName} ${whereExpr.operatorType} ${value}`
        case ConditionTypes.RAW:
        case ConditionTypes.JOINER:
          return condition.condition
      }
    }).join(' ')
    return (isSub) ? `(${stringifiedConditions})` : stringifiedConditions
  }
}

// console.log(
//   new Expression().where('testKey', 'testVal').or(
//     new Expression().whereBetween('subKey', 5, 6).or(
//       new Expression().where('myKey', 'myVal')
//         .where('test', 'test2'))
//         .whereIn('keyCollection', ['wow', 'heres', 'keys'])
//   ).where('anotherKey', OperatorTypes.GREATER_THAN, 'anotherVal').toString()
// )

/**
 * attribute_exists
 * attribute_not_exists
 * attribute_type
 * begins_with
 * size
 * contains
 */
// }
