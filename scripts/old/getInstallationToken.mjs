// for use when running locally (github workflow handles this otherwise)
import { createAppAuth } from '@octokit/auth-app';

export async function getInstallationAccessToken() {
  const auth = createAppAuth({
    appId: process.env.APP_ID,
    privateKey: process.env.PRIVATE_KEY,
    installationId: process.env.INSTALLATION_ID
  });
  const installationAuthentication = await auth({ type: 'installation' });
  return installationAuthentication.token;
}
