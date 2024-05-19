import EmailPasswordStep from './login/EmailPasswordStep'
import { authLoginByEmail } from '../../services/apis/requests/auth'

const emailPasswordSteps = [
  {
    component: EmailPasswordStep,
    onSubmit: async (data: { email: string, password: string }) => {
      const response = await authLoginByEmail({
        identifier: data.email,
        pwd: data.password,
        rememberMe: true
      })
      return response
        ? { success: true }
        : { success: false, message: 'Invalid credentials' }
    }
  }
]

export default emailPasswordSteps
