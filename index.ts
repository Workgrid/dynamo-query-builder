import Delete from './builder/operations/Delete'
import Get from './builder/operations/Get'
import Put from './builder/operations/Put'
import Query from './builder/operations/Query'
import Scan from './builder/operations/Scan'
import Update from './builder/operations/Update'

export const ConstructGet = Get
export const ConstructDelete = Delete
export const ConstructPut = Put
export const ConstructQuery = Query
export const ConstructScan = Scan
export const ConstructUpdate = Update

export { getAllPages } from './utils'
export { BuilderType } from './builder'
export { Expression } from './builder/attributes/ExpressionBuilder'
export { OperatorTypes } from './builder/attributes/ExpressionBuilder/interfaces/OperatorTypes'
