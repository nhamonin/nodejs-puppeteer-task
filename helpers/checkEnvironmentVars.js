export function checkEnvironmentVariables() {
  const requiredVariables = ['GMAIL_EMAIL', 'GMAIL_PASSWORD'];
  requiredVariables.forEach((variable) => {
    if (!process.env[variable]) {
      console.error(`Environment variable ${variable} is missing.`);
      process.exit(1);
    }
  });
}
