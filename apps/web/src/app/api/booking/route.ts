import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, date, time, type } = body;

    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: "Dados incompletos para agendamento" },
        { status: 400 }
      );
    }

    // In production, save to database and send confirmation email
    return NextResponse.json({ success: true, message: "Agendamento confirmado" });
  } catch {
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
