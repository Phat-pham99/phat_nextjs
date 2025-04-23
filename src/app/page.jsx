// import Image from "next/image";

import LandingPage from './pages/landing';

export default function MotherPage() {
    return (
        <div className="MotherPage w-full h-full z-0
        bg-[url('https://images.pexels.com/photos/1113145/pexels-photo-1113145.jpeg')]">
          <LandingPage/>
        </div>
    );
}