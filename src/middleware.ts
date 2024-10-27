import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { locales } from '@/config';

export default async function middleware(request: NextRequest) {
  // Step 1: Use the incoming request (example)
  const defaultLocale = request.headers.get('negin-cms-locale') || 'fa';

  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'never',
  });
  const response = handleI18nRouting(request);

  // Step 3: Alter the response (example)
  response.headers.set('negin-cms-locale', defaultLocale);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fa|en)/:path*'],
};
