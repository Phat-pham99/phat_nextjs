
import SignupForm from "../components/client-side/signup_form"
// import LoginAlert from "../components/client-side/login_alert";
// import './LoginPage.css';

import { Flex, Layout } from 'antd';

const LoginPage = () =>  {
    return (
        <div className="login-page flex items-center-safe justify-center-safe mx-20 my-20">
            <Layout>
                <div className="px-10 py-10 items-center mx-20 my-20 bg-gray-200">
                    <SignupForm/>
                </div>
            </Layout>
        </div>
    );
}
export default LoginPage;