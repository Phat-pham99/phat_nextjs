
import Navbar from "../components/client-side/navbar";

export default function PrivateLayout({ children }) {
    return (
        <div>
            <h1 className="text-green-500">This is protected route !</h1>
            <Navbar/>
            <main>{children}</main>
        </div>
    );
}