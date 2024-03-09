import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";
import dbConnect from "@/backend/config/dbConnect";

import updateProfileController from "@/backend/controllers/auth/updateProfileController";
import { isAuthenticated } from "@/backend/middlewares/auth";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.use(isAuthenticated).put(updateProfileController);


export async function PUT(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx)
}