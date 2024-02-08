import { NextRequest, NextResponse } from 'next/server';

type HandlerFunction = (req: NextRequest, params: any) => Promise<NextResponse>;

export const catchAsyncError = (handler: HandlerFunction) => async (req: NextRequest, params: any) => {
  try {
    return await handler(req, params);
  } catch (error: any) {
    
    // handle mongooseID Error
    if (error?.name === 'CastError') {
      error.message = `Resource not found. Invalid: ${error?.path}`;
    }

    //handle validation Error
    if (error?.name === 'ValidationError') {
      const message = Object.values(error.errors).map((value: any) => value.message);
      error.message = message;
      error.statusCode = 400;
    }

    return NextResponse.json({
      message: error.message,
    },
    { status: error.statusCode || 500}
    )
  }
} 