import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, email e mensagem sao obrigatorios" },
        { status: 400 }
      );
    }

    // In production, save to database and send email
    // For now, just return success
    return NextResponse.json({ success: true, message: "Mensagem recebida com sucesso" });
  } catch {
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
