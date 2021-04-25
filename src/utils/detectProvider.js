export async function detectProvider() {
  if (typeof window.ethereum !== 'undefined') {
    const chainId = await window.ethereum.request({
      method: 'eth_chainId'
    })

    return {
      result: true,
      chainId: chainId,
      provider: window.ethereum
    }

  } else {
    return {
      result: false,
      error: 'MetaMask not installed'
    }

  }
}
