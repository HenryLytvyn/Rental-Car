import { nextServer as api } from './api';
import { User } from '@/types/user';

export async function checkSession() {
  const { data } = await api.get<{ success: true }>('/auth/session');
  return data;
}

export async function getMe() {
  const { data } = await api.get<User>('/users/me');
  return data;
}
