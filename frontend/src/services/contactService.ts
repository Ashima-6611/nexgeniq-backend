import axios from 'axios';

export interface ContactData {
    name: string;
    email: string;
    phone: string;
    course: string;
}

export async function sendContact(data: ContactData) {
    // In development, use the local backend. In production, use the relative path so Vercel handles it via rewrite.
    const baseUrl = import.meta.env.DEV ? 'http://localhost:8000' : '';
    const response = await axios.post(`${baseUrl}/api/v1/user/contact`, data);
    return response.data;
}
