export const createSession = async () => {
  const isSessionCreated = localStorage.getItem('is-session-created')

  if (isSessionCreated === 'true') {
    throw new Error('Session already exist')
  }

  localStorage.setItem('is-session-created', 'true')
}
