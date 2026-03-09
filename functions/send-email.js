import { Resend } from "resend";

export async function onRequestPost(context) {
  const resend = new Resend(context.env.RESEND_API_KEY);

  const body = await context.request.json();
  const { name, email, message } = body;

  const { data, error } = await resend.emails.send({
    from: "jayanshrestha.com",
    to: "jayanshrestha055@gmail.com",
    subject: `New message from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  return new Response(JSON.stringify({ data }), { status: 200 });
}
