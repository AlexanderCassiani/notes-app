import SignupForm from "../signupForm/SignupForm";
import "./signupLayout.css";
import { SvgLeft, SvgRight } from "../../../assets/icons/auth/SignupSvg";

const SignupLayout = () => {
  return (
    <div className="signup-page">
      <SvgLeft className="svg-left" />
      <SvgRight className="svg-right" />
      <main>
        <SignupForm />
      </main>
    </div>
  );
};

export default SignupLayout;
