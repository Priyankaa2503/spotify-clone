import db from "@/lib/db";
import UserModel from "@/models/User";
import { NextResponse } from "next/server";

interface NewUserRequest {
  email: string;
  name: string;
  password: string;
}

interface NewUserResponse {
  id: string;
  email: string;
  name: string;
}
//register
type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
  const body = (await req.json()) as NewUserRequest;
  await db();

  try {
    const existingUser = await UserModel.findOne({ email: body.email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already in use!" },
        { status: 422 }
      );
    }

    const user = await UserModel.create({ ...body });

    return NextResponse.json({
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Error creating user. Please try again later." },
      { status: 500 }
    );
  }
};
