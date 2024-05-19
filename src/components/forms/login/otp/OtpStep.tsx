import { ChangeEvent } from 'react'

interface OtpStepProps {
  formData: { otp?: string };
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

const OtpStep: React.FC<OtpStepProps> = ({ formData, handleInputChange, handleSubmit }) => (
  <div>
    <h2>Enter OTP</h2>
    <label>
      OTP:
      <input
        type="text"
        name="otp"
        value={formData.otp || ''}
        onChange={handleInputChange}
        required
      />
    </label>
    <button onClick={handleSubmit}>Verify OTP</button>
  </div>
);

export default OtpStep;
