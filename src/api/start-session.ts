export const startSession = async () => {
  localStorage.setItem('session-started-at', Date.now().toString())
}
