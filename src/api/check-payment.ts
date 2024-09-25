export const checkPayment = async () => {
  const isSessionCreated = localStorage.getItem('is-session-created')

  if (isSessionCreated !== 'true') {
    throw new Error('Session does not exist')
  }

  localStorage.setItem('session-last-payment-check-at', Date.now().toString())

  return { isSuccess: true }
}
