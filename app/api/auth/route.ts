import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";
import { allRoomsController, newRoomController } from "@/backend/controllers/roomControllers";
import dbConnect from "@/backend/config/dbConnect";
import { AllUsersController } from "@/backend/controllers/authControllers";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(AllUsersController);

export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx)
}
