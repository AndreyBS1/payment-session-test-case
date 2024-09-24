const App = () => {

  const isLoading = true

  if (isLoading) {
    return (
      <main className="flex h-screen items-center justify-center">
        <p className='text-4xl'>Loading...</p>
      </main>
    )
  }

  return (
      <main className="flex h-screen items-center justify-center">
        <div className="space-y-6 rounded-tw px-4 py-6">
          <div className="flex gap-x-4">
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center">
                <div
                  className="-m-3 size-40 rounded-lg bg-gray-400"
                />
                
                <div className="flex w-64 flex-col gap-y-3 px-2 font-semibold">
                  <div className="flex justify-between">
                    <p>Order number:</p>
                    <p>[session.id]</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Currency:</p>
                    <p>[session.currency]</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Network:</p>
                    <p>[session.network]</p>
                  </div>
                </div>
              </div>

              <div>
                <input
                  value="session.paymentAddress"
                  readOnly
                />
                <button
                  className="mt-1 font-semibold text-primary"
                  onClick={() =>
                    window.navigator.clipboard.writeText(
                      'session.paymentAddress',
                    )
                  }
                >
                  Copy address
                </button>
              </div>

              <div>
                <input
                  value="session.paymentAmount"
                  readOnly
                />
                <button
                  className="mt-1 font-semibold text-primary"
                  onClick={() =>
                    window.navigator.clipboard.writeText(
                      'session.paymentAmount',
                    )
                  }
                >
                  Copy sum
                </button>
              </div>

              <div className="flex flex-col items-center gap-y-4">
                <button className="px-20">
                  Check payment
                </button>

                {/* Show on success */}
                {/* <button className="px-20">
                  Go to dashboard
                </button> */}

                <button className="w-full text-center font-semibold text-primary">
                  Cancel
                </button>
              </div>
            </div>

            <div className="flex w-72 flex-col">
              <p className="text-center font-semibold">Gateway time to pay</p>
              <div className="mb-2 rounded-2xl bg-checkout-gradient py-4">
                <p className="text-center text-2xl font-semibold">
                  [remaining time]
                </p>
              </div>

              <div className="flex grow flex-col gap-y-3 rounded-2xl bg-checkout-gradient p-4">
                <p className="text-2xl font-semibold">Instruction</p>
                <p className="leading-tight">
                  1. Copy the wallet address or scan the QR code to pay.
                </p>
                <p className="leading-tight">
                  2. Pay attention: The BlockChain network keeps the commission for the
                  transfer!
                </p>
                <p className="leading-tight">
                  3. A partially paid transfer will not be credited to the account.
                  Please indicate the exact amount when transferring.
                </p>
                <p className="font-bold leading-tight">
                  4. After confirming the transaction in your wallet, click the “Check
                  payment” button
                </p>
              </div>

              {/* Show if check failed */}
              {/* <div className="flex grow flex-col gap-y-3 rounded-2xl bg-checkout-gradient p-4">
                <p className="mb-4 text-center text-2xl font-semibold">Attention!</p>
                <p className="font-semibold leading-tight">
                  The payment has not been processed yet. Please wait a minute and try
                  again.
                </p>
                <p className="leading-tight">Please wait a minute and try again.</p>
                <p className="leading-tight">
                  Don't worry, sometimes it takes time to process a transaction. You can
                  check the payment status every minute until the end of the payment
                  session.
                </p>
              </div> */}

              {/* Show on success */}
              {/* <div className="flex grow flex-col items-center justify-center gap-y-3 rounded-2xl bg-checkout-gradient p-4">
                <p className="text-2xl font-semibold">Success!</p>
                <p className="text-center font-semibold leading-tight">
                  Payment processed. Your subscription details will be updated.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </main>
  )
}

export default App