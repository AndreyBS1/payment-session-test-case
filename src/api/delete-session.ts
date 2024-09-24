export const deleteSession = async () => {
  localStorage.removeItem('is-session-created')
  localStorage.removeItem('session-started-at')
  localStorage.removeItem('session-last-payment-check-at')
}
