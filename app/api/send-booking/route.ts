import { NextResponse } from "next/server";
import { Resend } from "resend";

// تأكد من إضافة RESEND_API_KEY في ملف .env
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, branchName, branchEmail, service, message } = body;

    const mainAdminEmail = "adhamemad.weschool@gmail.com"; // الميل الأساسي

    // إرسال الإيميل
    const { data, error } = await resend.emails.send({
      from: "Al Barakat Booking <onboarding@resend.dev>", // بعد توثيق الدومين غيره لـ booking@albarakatgroup.com
      to: [mainAdminEmail], // بيبعت للميل الأساسي + ميل الفرع المختار
      subject: `حجز موعد جديد: ${name} - فرع ${branchName}`,
      html: `
        <div style="font-family: sans-serif; direction: rtl; text-align: right;">
          <h2 style="color: #00838f;">تفاصيل طلب حجز موعد جديد</h2>
          <p><strong>اسم العميل:</strong> ${name}</p>
          <p><strong>رقم الجوال:</strong> ${phone}</p>
          <p><strong>البريد الإلكتروني:</strong> ${email}</p>
          <hr />
          <p><strong>الفرع المختار:</strong> ${branchName}</p>
          <p><strong>الخدمة المطلوبة:</strong> ${service}</p>
          <p><strong>رسالة إضافية:</strong> ${message || "لا توجد معلومات إضافية"}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}