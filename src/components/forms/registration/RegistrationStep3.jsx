import { type ChangeEvent } from 'react'

interface RegistrationStep3Props {
  formData: { password?: string, confirmPassword?: string }
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const RegistrationStep3: React.FC<RegistrationStep3Props> = ({
  formData,
  handleInputChange
}) => (
  <div>
    <label>
      Password:
      <input
        type="password"
        name="password"
        value={formData.password || ''}
        onChange={handleInputChange}
        required
      />
    </label>
    <label>
      Confirm Password:
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword || ''}
        onChange={handleInputChange}
        required
      />
    </label>
  </div>
)

export default RegistrationStep3
