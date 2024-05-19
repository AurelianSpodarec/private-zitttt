import RegistrationStep1 from "@/components/forms/registration/RegistrationStep1"
import RegistrationStep2 from "@/components/forms/registration/RegistrationStep2"
import RegistrationStep3 from "@/components/forms/registration/RegistrationStep3"

// Need to be from the server actions
import { registerUser } from '../../services/apis/requests/auth'

const registrationSteps = [
  {
    component: RegistrationStep1,
    onSubmit: async (data: { firstName: string, lastName: string }) => {
      // Validation logic for step 1
      return { success: true }
    }
  },
  {
    component: RegistrationStep2,
    onSubmit: async (data: { email: string, phoneNumber: string }) => {
      // Validation logic for step 2
      return { success: true }
    }
  },
  {
    component: RegistrationStep3,
    onSubmit: async (data: { password: string, confirmPassword: string }) => {
      if (data.password !== data.confirmPassword) {
        return { success: false, message: 'Passwords do not match' }
      }
      const response = await registerUser(data)
      return response.success
        ? { success: true }
        : { success: false, message: response.message }
    }
  }
]

export default registrationSteps
