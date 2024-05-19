export async function verifyOtp ({ phoneNumber, otp }) {
  // Implement your logic to verify the OTP
  return await fetch('https://your-otp-server.com/verify-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ phoneNumber, otp })
  }).then(async (res) => await res.json())
}
