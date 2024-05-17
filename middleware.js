import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:[`/`,`/productDetails/(.*)`]
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$l_next).*)', '/', '/(api trpc) (.*)'],
};