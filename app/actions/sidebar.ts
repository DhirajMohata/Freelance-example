"use client"

import { logout } from '@/store/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function useLogout(): () => void {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    router.push("/auth/login");
  };

  return handleLogout;
};
