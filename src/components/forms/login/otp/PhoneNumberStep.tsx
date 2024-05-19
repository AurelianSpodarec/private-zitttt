const PhoneNumberStep = ({ formData, handleInputChange }) => (
  <div>
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

export default PhoneNumberStep
