
import LoginForm from "../../components/client-side/login_form";
import LoginAlert from "../../components/client-side/login_alert";
import './LoginPage.css';

const LoginPage = () =>  {
    return (
        <div className="login-page">
            <div className="login-container">
                <LoginAlert />
                <LoginForm />
            </div>
        </div>
    );
}
export default LoginPage;