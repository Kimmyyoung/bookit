import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";
import dbConnect from "@/backend/config/dbConnect";
import { updateRoomController, deleteRoomController } from "@/backend/controllers/roomControllers";

interface RequestContext {
  params: {
    id: string;
  }
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.put(updateRoomController);
router.delete(deleteRoomController);

export async function PUT(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx)
}

export async function DELETE(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx)
}

