import { IUser } from '@/backend/models/users';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from "next/server";


export const isAuthenticated = async (
  req: NextRequest,
  next: any,
  event: any
) => {
  const session = await getToken({ req });

  if (!session) {
    return NextResponse.json({
      message: "Login first to access this resource.",
    }, { status: 401 });
  }

  req.user = session.user as IUser;
  return next();
}