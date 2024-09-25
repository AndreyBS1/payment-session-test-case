export const deleteSession = async () => {
  const isSessionCreated = localStorage.getItem('is-session-created')

  if (isSessionCreated !== 'true') {
    throw new Error('Session does not exist')
  }

  localStorage.removeItem('is-session-created')
  localStorage.removeItem('session-started-at')
  localStorage.removeItem('session-last-payment-check-at')
}
