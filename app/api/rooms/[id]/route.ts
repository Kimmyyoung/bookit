import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";
import dbConnect from "@/backend/config/dbConnect";
import { getRoomDetails, updateRoomController } from "@/backend/controllers/roomControllers";

interface RequestContext {
  params: {
    id: string;
  }
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(getRoomDetails);
router.put(updateRoomController);

export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx)
}

export async function PUT(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx)
}
