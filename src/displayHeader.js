const colors = require('colors');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log(colors.cyan('========================================'));
  console.log(colors.cyan('=        EVM Auto Transfer Bot         ='));
  console.log(colors.cyan('=                                      ='));
  console.log(colors.cyan('=        Do Your Own Research!         ='));
  console.log(colors.cyan('========================================'));
  console.log();
}

module.exports = displayHeader;
