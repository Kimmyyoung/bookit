import { NextRequest, NextResponse } from "next/server";
import Users from "../models/users";
import { catchAsyncError } from "../middlewares/catchAsyncError";

// register user => api/auth/register
export const registerUserController = catchAsyncError(async(req: NextRequest) => {
  const body = await req.json();
  const { name, email, password } = body;

  const user = Users.create({
    name,
    email,
    password,
  });

  return NextResponse.json({
    sucess: true,
    user,
  })
});

export const AllUsersController = catchAsyncError(async (req: NextRequest) => {
  const users = await Users.find();

  return NextResponse.json({
    success: true,
    users,
  });
});
