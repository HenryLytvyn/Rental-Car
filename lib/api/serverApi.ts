import { cookies } from 'next/headers';
import { nextServer as api } from './api';

export async function checkServerSession() {
  const cookieStore = await cookies();
  const response = await api.get('/auth/session', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return response;
}
