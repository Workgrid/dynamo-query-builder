import ExpressionAttributeValues from './ExpressionAttributeValues'

export type ExpressionType = 'ADD' | 'DELETE' | 'REMOVE' | 'SET'

interface ITransaction { keyName: string, value?: any }

export default <T extends any>(baseClass: T, exprAttrValues: ReturnType<typeof ExpressionAttributeValues>) => {

  const adds: ITransaction[] = []
  const deletes: ITransaction[] = []
  const removes: ITransaction[] = []
  const sets: ITransaction[] = []

  return {
    add: (type: ExpressionType, keyName: string, value?: any): T => {
      const newTransaction: ITransaction = { keyName, value }

      switch (type) {
        case 'ADD':
          adds.push(newTransaction)
          break
        case 'DELETE':
          deletes.push(newTransaction)
          break
        case 'REMOVE':
          removes.push(newTransaction)
          break
        case 'SET':
          sets.push(newTransaction)
          break
      }

      return baseClass
    },

    // Looking to clean this up, but the slight differences between the expressions make it difficult
    get: () => {
      const compiledTransactions = []
      const mappedAdds = adds.map((add, index) => {
        const transactionIndex = `:Add${index + 1}`
        exprAttrValues.add(transactionIndex, add.value)

        return `${add.keyName} ${transactionIndex}`
      })
      if (mappedAdds.length > 0) {
        compiledTransactions.push(`ADD ${mappedAdds.join(', ')}`)
      }

      const mappedDeletes = deletes.map((del, index) => {
        const transactionIndex = `:Delete${index + 1}`
        exprAttrValues.add(transactionIndex, del.value)

        return `${del.keyName} ${transactionIndex}`
      })
      if (mappedDeletes.length > 0) {
        compiledTransactions.push(`DELETE ${mappedDeletes.join(', ')}`)
      }

      const mappedRemoves = removes.map((remove) => {
        return remove.keyName
      })
      if (mappedRemoves.length > 0) {
        compiledTransactions.push(`REMOVE ${mappedRemoves.join(', ')}`)
      }

      const mappedSets = sets.map((set, index) => {
        const transactionIndex = `:Set${index + 1}`
        exprAttrValues.add(transactionIndex, set.value)

        return `${set.keyName} = ${transactionIndex}`
      })
      if (mappedSets.length > 0) {
        compiledTransactions.push(`SET ${mappedSets.join(', ')}`)
      }

      if (compiledTransactions.length !== 0) {
        return {
          UpdateExpression: compiledTransactions.join(' ')
        }
      }
      return {}
    }
  }
}
