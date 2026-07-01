import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    component: RootLayout,
    children: [
      {
        index: true,
        component: Home,
      }
    ]
  }, 
]);