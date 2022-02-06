import chalk from 'chalk';

export async function main(argsArray) {
    const commands = ['guess', 'is-it', 'help']
    const args = process.argv
  
    // usage represents the help guide
    const usage = function() {
      const usageText = `
      guess will let you try your luck guessing a number between 0-10.
  
      usage:
        guess <command>
  
        commands can be:
  
        is-it:    have a guess
        help:     used to print the usage guide
      `
      const warning = chalk.hex('#FFA500');
      const eLog = warning(usageText);
      console.log(eLog)
    }
  
    // used to log errors to the console in red color
    function errorLog(error) {
      const eLog = chalk.red(error)
      console.log(eLog)
    }
  
    // we make sure the length of the arguments is exactly three
    if (args.length > 3) {
      errorLog(`only one argument can be accepted`)
      usage()
    }
  
    switch(args[2]) {
        case 'help':
            usage()
            break
        case 'new':
            break
        default:
            errorLog('invalid command passed')
            usage()
    }
  }