export async function sendOtp ({ phoneNumber }) {
  // Implement your logic to send OTP to the user's phone number
  return await fetch('https://your-otp-server.com/send-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ phoneNumber })
  }).then(async (res) => await res.json())
}
