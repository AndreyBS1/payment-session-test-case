export const startSession = async () => {
  const isSessionCreated = localStorage.getItem('is-session-created')

  if (isSessionCreated !== 'true') {
    throw new Error('Session does not exist')
  }

  localStorage.setItem('session-started-at', Date.now().toString())
}
