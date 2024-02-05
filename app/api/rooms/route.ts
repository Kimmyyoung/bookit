import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";
import { allRoomsController, newRoomController } from "@/backend/controllers/roomControllers";
import dbConnect from "@/backend/config/dbConnect";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(allRoomsController);
router.post(newRoomController)

export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx)
}

export async function POST(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx)
}