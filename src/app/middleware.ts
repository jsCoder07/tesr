import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// Create Protected Routes
const isProtected=createRouteMatcher(["/settings(.*)"]) 
export default clerkMiddleware((auth,req)=>{
    // Check if the requested page is protected and protect if user isnt authenticated
    if(isProtected(req)){
        auth().protect();
    }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};