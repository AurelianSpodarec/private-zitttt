import { type ChangeEvent } from 'react'

interface RegistrationStep2Props {
  formData: { email?: string, phoneNumber?: string }
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const RegistrationStep2: React.FC<RegistrationStep2Props> = ({
  formData,
  handleInputChange
}) => (
  <div>
    <label>
      Email:
      <input
        type="email"
        name="email"
        value={formData.email || ''}
        onChange={handleInputChange}
        required
      />
    </label>
    <label>
      Phone Number:
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber || ''}
        onChange={handleInputChange}
        required
      />
    </label>
  </div>
)

export default RegistrationStep2
