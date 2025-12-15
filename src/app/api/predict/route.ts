import { NextResponse } from "next/server";
import { predictDisease } from "@/lib/predictor";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { symptoms } = body;

    if (!symptoms || symptoms.length === 0) {
      return NextResponse.json(
        { error: "No symptoms provided" },
        { status: 400 }
      );
    }

    const result = predictDisease(symptoms);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 500 }
    );
  }
}
