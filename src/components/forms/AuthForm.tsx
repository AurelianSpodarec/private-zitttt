import { useState } from "react";
import MultiStepForm from "./MultiStepForm";
import phoneOtpSteps from "../auth/phoneOtpSteps";
import emailPasswordSteps from "../auth/emailPasswordSteps";
import registrationSteps from "../auth/registrationSteps";

const AuthForm: React.FC = () => {
  const [authMethod, setAuthMethod] = useState<string | null>(null);
  const [isSignup, setIsSignup] = useState(false);

  const handleAuthMethodSelection = (method: string) => {
    setAuthMethod(method);
    setIsSignup(false);
  };

  const handleSignupSelection = () => {
    setAuthMethod("register");
    setIsSignup(true);
  };

  return (
    <div>
      <h1>{isSignup ? "Sign Up" : "Login"}</h1>
      {!authMethod && (
        <div>
          <button onClick={() => handleAuthMethodSelection("emailPassword")}>
            Login with Email/Password
          </button>
          <button onClick={() => handleAuthMethodSelection("phoneOtp")}>
            Login with Phone OTP
          </button>
          <button onClick={handleSignupSelection}>Sign Up</button>
        </div>
      )}
      {authMethod && !isSignup && (
        <MultiStepForm
          steps={authMethod === "phoneOtp" ? phoneOtpSteps : emailPasswordSteps}
        />
      )}
      {isSignup && <MultiStepForm steps={registrationSteps} />}
    </div>
  );
};

export default AuthForm;
