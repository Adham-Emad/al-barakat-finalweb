import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    const myEmail = "adhamemad.weschool@gmail.com"; // ميل الأدمن

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [myEmail],
      subject: `رسالة جديدة من الموقع: ${subject}`,
      html: `
        <div dir="rtl" style="font-family: sans-serif; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #00838f;">رسالة تواصل جديدة</h2>
          <p><strong>الاسم:</strong> ${firstName} ${lastName}</p>
          <p><strong>الإيميل:</strong> ${email}</p>
          <p><strong>الجوال:</strong> ${phone || "غير مسجل"}</p>
          <p><strong>الموضوع:</strong> ${subject}</p>
          <hr />
          <p><strong>الرسالة:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    if (error) return NextResponse.json({ error }, { status: 400 });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}