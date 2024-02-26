/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import Room, { IRoom } from "../models/room";

import { catchAsyncError } from "../middlewares/catchAsyncError";
import APIFilters from "../utils/apiFilters";

export const allRoomsController = catchAsyncError(async (req: NextRequest) => {
  try {
    const resPerPage: number = 40;
    const { searchParams } = new URL(req.url);   

    const queryStr: any = {};
    // const roomsCount = await Room.countDocuments();
    
    searchParams.forEach((value, key) => {
      queryStr[key] = value;
    });

    const apiFilters = new APIFilters(Room, queryStr).search().filter();
    let rooms: IRoom[] = await apiFilters.query;
    const filteredRoomsCount = rooms.length;

    apiFilters.pagination(resPerPage);
    rooms = await apiFilters.query.clone();

    return NextResponse.json({
      success: true,
      resPerPage,
      filteredRoomsCount,
      rooms,
    });

  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message,
    })
  }  
});



export const newRoomController = catchAsyncError(async (req: NextRequest) => {
  try {
    const body = await req.json();
    const room = await Room.create(body);

    return NextResponse.json({
      success: true,
      room,
    })
  } catch (error:any) {
    return NextResponse.json({
      success: false,
      message: error.message,
    })
  }
});


// get room detail 

export const getRoomDetails = catchAsyncError(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
  
    try {
      const room = await Room.findById(params.id);

      if (!room) {
        return NextResponse.json({
          success: false,
          message: "Room not found with this ID",
        }, { status: 404 });
      }

      return NextResponse.json({
        success: true,
        room,
      });
    } catch (error: any) {
      return NextResponse.json({
        success: false,
        message: error.message,
      })
    }
  });


// update room details
export const updateRoomController = catchAsyncError(async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    let room = await Room.findById(params.id);
  const body = await req.json();

  if (!room) {
    return NextResponse.json({
      success: false,
      message: "Room not found with this ID",
    }, {status: 404});
  }

  room = await Room.findByIdAndUpdate(params.id, body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  return NextResponse.json({
    success: true,
    room,
  });
  } catch (error:any) {
    return NextResponse.json({
      success: false,
      message: error.message,
    })
  }
  
});


export const deleteRoomController = catchAsyncError(async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const room = await Room.findById(params.id);
  if (!room) {
    return NextResponse.json({
      success: false,
      message: "Room not found with this ID",
    }, { status: 404 });
  }

  await room.deleteOne();

  return NextResponse.json({
    success: true,
    message: "Room is deleted",
  });
  } catch (error:any) {
    return NextResponse.json({
      success: false,
      message: error.message,
    })
  }
});
