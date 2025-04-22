'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function SecretPage() {
    const cookieStore = await cookies();
    cookieStore.set('auth_token', 'true', { path: '/private' }); // Ensure the value is a string
    console.log("Set cookie completed!", cookieStore);
    redirect('/private/home'); // Redirect after setting the cookie
}