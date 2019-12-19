import Delete from './builder/types/Delete'
import Get from './builder/types/Get'
import Put from './builder/types/Put'
import Query from './builder/types/Query'
import Scan from './builder/types/Scan'
import Update from './builder/types/Update'

export const ConstructGet = Get
export const ConstructDelete = Delete
export const ConstructPut = Put
export const ConstructQuery = Query
export const ConstructScan = Scan
export const ConstructUpdate = Update

export { BuilderType } from './builder'
