// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { RateLimiterMemory } from 'rate-limiter-flexible';

const rateLimiter = new RateLimiterMemory({
  points: 10,
  duration: 0.5,
});

export async function middleware(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.ip || '127.0.0.1';

    await rateLimiter.consume(ip);

    return NextResponse.next();
  } catch (rejRes) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }
}

export const config = {
  matcher: '/:path*',
};
