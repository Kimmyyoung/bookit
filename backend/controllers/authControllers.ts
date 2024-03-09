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

// update profile => /api/me/update
export const updateUserController = catchAsyncError(async (req: NextRequest) => {
  const body = await req.json();

  const userData = {
    name: body.name,
    email: body.email,
  };

  const user = await Users.findByIdAndUpdate(req.user._id, userData);

  return NextResponse.json({
    success: true,
    user,
  });
});

