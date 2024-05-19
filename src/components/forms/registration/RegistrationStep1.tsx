import { ChangeEvent } from "react";

interface RegistrationStep1Props {
  formData: { firstName?: string; lastName?: string };
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RegistrationStep1: React.FC<RegistrationStep1Props> = ({
  formData,
  handleInputChange,
}) => (
  <div>
    <label>
      First Name:
      <input
        type="text"
        name="firstName"
        value={formData.firstName || ""}
        onChange={handleInputChange}
        required
      />
    </label>
    <label>
      Last Name:
      <input
        type="text"
        name="lastName"
        value={formData.lastName || ""}
        onChange={handleInputChange}
        required
      />
    </label>
  </div>
);

export default RegistrationStep1;
