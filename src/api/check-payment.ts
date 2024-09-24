export const checkPayment = async () => {
  localStorage.setItem('session-last-payment-check-at', Date.now().toString())
  return { isSuccess: true }
}
