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
    if (args.length > 4) {
      errorLog(`only two arguments can be accepted`)
      usage()
    }

    const guessme = function(argsArray) {
        const guess = parseFloat(argsArray[3]);
        const warning = chalk.hex('#FFA500');
        const win = chalk.hex('#7be61a');

        const correct = Math.round(Math.random() * 10)

        if(Number.isNaN(guess)){ 
            errorLog('give me numbers please')
        }
        if(guess === correct)
        {
            console.log(win('correct'))
        }else{
            console.log(warning('WRONG', correct))
        }
    }
  
    switch(args[2]) {
        case 'help':
            usage()
            break
        case 'is-it':
            guessme(args)
            break
        case 'new':
            break
        default:
            errorLog('invalid command passed')
            usage()
    }
  }