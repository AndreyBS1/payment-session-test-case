const getTimestamp = (localStorageKey: string) => {
  const timestampString = localStorage.getItem(localStorageKey)
  return timestampString ? Number(timestampString) : null
}

export const getSession = async () => {
  const isSessionCreated = localStorage.getItem('is-session-created')

  if (isSessionCreated !== 'true') {
    throw new Error('Session does not exist')
  }

  const startedAt = getTimestamp('session-started-at')
  const lastPaymentCheckAt = getTimestamp('session-last-payment-check-at')

  return {
    id: 1,
    network: 'Testnet',
    currency: 'USDT',
    standard: 'Test',
    contractAddress: '0x',
    paymentAddress: '0x',
    // paymentQr: '',
    paymentAmount: 10,
    startedAt,
    lastPaymentCheckAt,
  }
}
