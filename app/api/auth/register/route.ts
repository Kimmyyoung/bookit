import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";
import dbConnect from "@/backend/config/dbConnect";
import { registerUserController } from "@/backend/controllers/authControllers";

interface RequestContext {
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.post(registerUserController);

export async function POST(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx)
}
