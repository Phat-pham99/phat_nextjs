// import Image from "next/image";
import { redirect } from 'next/navigation';
import Home from './private/home/page';

export default function MotherPage() {
    return (
        <div>
          <Home/>
        </div>
    );
}