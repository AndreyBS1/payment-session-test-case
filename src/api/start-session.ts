export const startSession = async () => {
  const isSessionCreated = localStorage.getItem('is-session-created')
  const startedAt = localStorage.getItem('session-started-at')

  if (isSessionCreated !== 'true') {
    throw new Error('Session does not exist')
  }

  if (startedAt) {
    throw new Error('Session already started')
  }

  localStorage.setItem('session-started-at', Date.now().toString())
}
