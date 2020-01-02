import { OperatorTypes } from './OperatorTypes'

// Different types that can exist in the condition stack
export enum ConditionTypes {
  WHERE = 'WHERE',
  WHERE_BETWEEN = 'WHERE_BETWEEN',
  WHERE_IN = 'WHERE_IN',
  RAW = 'RAW',
  JOINER = 'JOINER'
}

export interface IExpression {
  type: ConditionTypes,
  condition: ICondition | string
}

export interface IValue {
  value: string | number | boolean | Array<string| number>,
  alias: string
}

export interface ICondition {
  keyName: string,
  value?: string | number | boolean,
  secondValue?: string | number | boolean,
  operatorType?: OperatorTypes
}
