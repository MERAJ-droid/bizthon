import { DUST_AMOUNT, ExecuteScriptResult, SignerProvider } from '@alephium/web3'
import { Transfer } from '../../artifacts/ts/scripts'

export const transferTokens = async (signerProvider: SignerProvider, recipientAddress: string, amount: string): Promise<ExecuteScriptResult> => {
  return await Transfer.execute(signerProvider, {
    initialFields: {
      recipient: recipientAddress,
      amount: BigInt(amount)
    },
    attoAlphAmount: DUST_AMOUNT,
  })
}
