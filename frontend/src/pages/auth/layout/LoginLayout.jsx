import "./loginLayout.css";
import LoginForm from "../loginForm/LoginForm";
import { SvgLeft } from "../../../assets/icons/auth/SignupSvg";
import { SvgRight } from "../../../assets/icons/auth/SignupSvg";

const LoginLayout = () => {
  return (
    <div className="login-page">
      <SvgLeft className="svg-left" />
      <SvgRight className="svg-right" />
      <main>
        <LoginForm />
      </main>
    </div>
  );
};

export default LoginLayout;
