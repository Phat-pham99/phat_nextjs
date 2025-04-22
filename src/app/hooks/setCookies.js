'use server';
import { cookies } from 'next/headers';

export async function setCookie() {
    const cookieStore = await cookies();
    cookieStore.set('name', 'value', { path: '/' });
}