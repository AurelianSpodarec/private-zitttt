import { ChangeEvent } from "react";

interface EmailPasswordStepProps {
  formData: { email?: string; password?: string };
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EmailPasswordStep: React.FC<EmailPasswordStepProps> = ({
  formData,
  handleInputChange,
}) => (
  <div>
    <label>
      Email:
      <input
        type="email"
        name="email"
        value={formData.email || ""}
        onChange={handleInputChange}
        required
      />
    </label>
    <label>
      Password:
      <input
        type="password"
        name="password"
        value={formData.password || ""}
        onChange={handleInputChange}
        required
      />
    </label>
  </div>
);

export default EmailPasswordStep;
