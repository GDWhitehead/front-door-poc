import { AuthState, toRelativeUrl } from "@okta/okta-auth-js";

export interface OktaSignInWithRedirectProps {
  oktaAuth: {
    setOriginalUri: (arg0: string) => void;
    signInWithRedirect: () => void;
  };
  authState: AuthState | null;
}

const OktaSignInWithRedirect = ({
  oktaAuth,
  authState,
}: OktaSignInWithRedirectProps) => {
  if (!authState?.isAuthenticated) {
    const originalUri = toRelativeUrl(
      window.location.href,
      window.location.origin,
    );
    oktaAuth.setOriginalUri(originalUri);
    oktaAuth.signInWithRedirect();
  }
};

export default OktaSignInWithRedirect;
