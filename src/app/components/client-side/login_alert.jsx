"use client"
import { Alert } from 'antd';

const LoginAlert = () => {
    const urlParams = new URLSearchParams(window.location.search);
    // const urlParams = "alert=true";
    console.log("urlParams",urlParams.toString());
    return urlParams.toString() == "alert=true" ? (
        <Alert
        message="User not authenticated !"
        description="You need to login before proceed"
        type="error"
        closable
    />
    ):(
        <></>
    )

}
export default LoginAlert;