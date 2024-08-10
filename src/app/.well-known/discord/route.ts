import { NextResponse } from 'next/server';

export async function GET() {
  const verificationContent = 'dh=79b4d15f59fb2bbed46e4d4fad11cbee7352392d';

  return new NextResponse(verificationContent, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
