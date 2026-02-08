import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { industry, painPoints, solutions, email } = body;

    if (!industry || !painPoints?.length || !solutions?.length) {
      return NextResponse.json(
        { error: "Dados incompletos para calculo de ROI" },
        { status: 400 }
      );
    }

    const baseROI = 150000;
    const multipliers: Record<string, number> = {
      financeiro: 2.5, varejo: 1.8, saude: 2.2, logistica: 1.6,
      tecnologia: 2.0, manufatura: 1.7, educacao: 1.3, outros: 1.5,
    };

    const roi = Math.round(
      baseROI *
      (multipliers[industry] || 1.5) *
      (painPoints.length * 0.3 + 1) *
      (solutions.length * 0.25 + 1)
    );

    // In production, save to database
    return NextResponse.json({
      success: true,
      data: {
        roi,
        savings: Math.round(roi * 0.4),
        revenue: Math.round(roi * 0.35),
        costReduction: Math.round(roi * 0.25),
      },
    });
  } catch {
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
