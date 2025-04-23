
import LoginForm from "../components/client-side/login_form";
// import LoginAlert from "../components/client-side/login_alert";
// import './LoginPage.css';

import { Flex, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const LoginPage = () =>  {
    return (
        <div className="login-page flex items-center-safe justify-center-safe mx-20 my-20 bg-green-100">
            <Layout>
                <div className="px-10 py-10 items-center mx-20 my-20 bg-gray-200">
                    <LoginForm/>
                </div>
                
            </Layout>
        </div>
    );
}
export default LoginPage;