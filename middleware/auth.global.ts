export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();

  // Public routes that don't need authentication
  const publicRoutes = ['/login', '/register', '/about', '/servicii', '/evenimente', '/'];

  // If the user is not authenticated and the route is not public, redirect to login
  if (!user.value && !publicRoutes.includes(to.path)) {
    return navigateTo('/login');
  }

  // If the user is authenticated and tries to go to /login or /register, redirect to dashboard
  if (user.value && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/dashboard');
  }
});
