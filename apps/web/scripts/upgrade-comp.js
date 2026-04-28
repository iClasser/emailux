const inquirer = require('inquirer');
const { execSync } = require('child_process');

(async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'version',
      message: 'What version do you want to upgrade to?',
    },
  ]);

  const version = (answers.version || '').trim();
  console.log(version);
  if (!version) {
    console.log('No version provided');
    return;
  }

  console.log(`Upgrading to version ${version}`);

  const cmd =
    `pnpm -C apps/examples add @emailux/components@${version}` +
    ` && pnpm -C apps/playground add @emailux/components@${version}`;

  console.log(cmd);
  try {
    execSync(cmd, { stdio: 'inherit', shell: true });
    console.log('Upgrade completed.');
  } catch (err) {
    console.error('Upgrade failed.');
    process.exitCode = 1;
  }
})();