import { NextRequest, NextResponse } from "next/server";
import Room from "../models/room";

export const allRoomsController = async (req: NextRequest) => {
  const resPerPage: number = 8;
  const rooms = await Room.find();
  
  return NextResponse.json({
    success: true,
    resPerPage,
    rooms,
  });
}


export const newRoomController = async (req: NextRequest) => {
  const body = await req.json();
  const room = await Room.create(body);

  return NextResponse.json({
    success: true,
    room,
  })

}

// get room detail 

export const getRoomDetails = async (req: NextRequest, {params} : { params : {id: string }}) => {
  const room = await Room.findById(params.id);
  if (!room) {
    return NextResponse.json({
      success: false,
      message: "Room not found with this ID",
    }, {status: 404});
  }

  return NextResponse.json({
    success: true,
    room,
  });
}

// update room details
export const updateRoomController = async (req: NextRequest, {params} : { params : {id: string }}) => {
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
};


