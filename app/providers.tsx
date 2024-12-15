import React from "react";
import AppProvider from "./useGlobalContext";
import { ToastContainer, toast } from "react-toastify";
import StepperContextProvider from "./ContextAPI_Hooks/useStepperContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "react-oidc-context";
import { Toaster } from "@/components/ui/toaster";

const Providers = ({ children }: { children: React.ReactNode }) => {
  // $ aws cognito setup
  const cognitoAuthConfig = {
    authority:
      "https://cognito-idp.af-south-1.amazonaws.com/af-south-1_mDOSdJuIe",
    client_id: "1j8ams7ka9hung02vokr2k4voj",
    redirect_uri: "https://fabian-portfolio.net/dashboard",
    response_type: "code",
    scope: "phone openid email",
  };

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60, // Data will not be considered stale for 1 hour
        refetchOnWindowFocus: false, // Prevent refetching when the window is focused
        refetchOnReconnect: false, // Prevent refetching when the connection is restored
        refetchOnMount: false, // Prevent refetching when a component mounts } },
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider {...cognitoAuthConfig}>
        <AppProvider>
          <StepperContextProvider>
            <Toaster />
            <ToastContainer position="top-center" theme="light" />
            {children}
          </StepperContextProvider>
        </AppProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
    </QueryClientProvider>
  );
};
export default Providers;
