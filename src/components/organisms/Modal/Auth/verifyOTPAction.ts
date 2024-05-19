export async function verifyOtp({ phoneNumber, otp }) {
  // Implement your logic to verify the OTP
  return fetch("https://your-otp-server.com/verify-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phoneNumber, otp }),
  }).then((res) => res.json());
}
