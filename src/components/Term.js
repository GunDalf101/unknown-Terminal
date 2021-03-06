import Terminal from 'react-console-emulator'
import commands from '../components/Commands/commands.js'
import React from 'react'
import figlet from 'figlet';
import getcat from '../utils/cat'

export default function Term() {
    const cmds = commands.commands
    const owrs = commands.overwrites
    const terminal = React.createRef()
    const [prompt, setPrompt] = React.useState('you@/unknown:~$ ')
    const [home, sethome] = React.useState('unknown')
    const [dir, setdir] = React.useState({
        'unknown': []
    })
    return (
        <Terminal
            ref={terminal}
            welcomeMessage={[
                "Welcome to the unknown terminal!",
                "---",
                "In this game you'll have to find the clues by using the commands to find the first part of the unknown key.",
                "---",
                "REMINDER: if you find all the piece of the key your name will be listed in the unknown hall and you'll become an official member of the gang",
                "---",
                "Type 'help' to see a list of commands.",
                "---",
                
            ]}
            commands={{
                clear: {
                    description: 'Clears the terminal',
                    usage: 'clear',
                    fn: () => {
                        terminal.current.clearStdout()
                    }
                },
                cat: {
                    description: 'Get a random cute cat~',
                    usage: 'cat',
                    fn: async () => {
                        const url = await getcat()
                        terminal.current.pushToStdout("getting a cute cat for you..\n---\n")
                        terminal.current.pushToStdout(<img src={url} width="500px" height="380px" alt='cat'></img>)
                    }
                },
                cd: {
                    description: 'Change directory, not really, lol!',
                    usage: 'cd <directory>',
                    fn: (...args) => {
                        if (args.length===1 && args[0]==='..') {
                            if (prompt === 'you@/ashterm:~$ ') {
                                return 'cannot go up'
                            } else {
                                setPrompt(prompt.substring(0, prompt.lastIndexOf('/'))+":~$ ")
                                sethome(prompt.substring(prompt.lastIndexOf('/', prompt.lastIndexOf('/')-1)+1, prompt.lastIndexOf('/')))
                                //console.log(prompt.substring(prompt.lastIndexOf('/', prompt.lastIndexOf('/')-1)+1, prompt.lastIndexOf('/')))
                                //console.log(prompt.lastIndexOf('/', prompt.lastIndexOf('/')-1))
                                //console.log(prompt.lastIndexOf('/'))
                                return 'changed directory'
                            }
                        } else {
                            if (dir[home].includes(args[0])) {
                                setPrompt(`${prompt.slice(0, -4)+ "/" + args.join('/') + ":~$ "}`)
                                sethome(args.join('/'))
                                //console.log(prompt.slice(0, -4)+ "/" + args.join('/'))
                                return 'changed directory'
                            } else {
                                return 'cannot find directory'
                            }
                        }
                        
                    }
                },
                ls: {
                    description: 'List files in the current directory',
                    usage: 'ls',
                    fn: () => {
                        if (dir[home].length === 0) {
                            return 'nothing here :(\nUse mkdir to create a dir inside this one.'
                        } else {
                            return dir[home].join('\n')
                        }
                    }

                },
                mkdir: {
                    description: 'Make a directory',
                    usage: 'mkdir <directory>',
                    fn: (...args) => {
                        if (args.length===1) {
                            setdir({
                                ...dir,
                                [home]: [...dir[home], args[0]],
                                [args[0]]:[]
                            })
                            //console.log(dir)
                            return `created directory ${args[0]}.`
                        } else {
                            return 'invalid arguments'
                        }
                    }
                },
                help: {
                    description: 'List all available commands',
                    usage: 'help',
                    fn: () => {
                        return `
                            ${Object.keys(owrs).map(cmd => `${cmd}${"???".repeat(12-cmd.length)} | ${owrs[cmd].description}${"???".repeat(60-owrs[cmd].description.length)} | ${owrs[cmd].usage}`).join('\n')}
                            ${Object.keys(cmds).map(cmd => `${cmd}${"???".repeat(12-cmd.length)} | ${cmds[cmd].description}${"???".repeat(60-cmds[cmd].description.length)} | ${cmds[cmd].usage}`).join('\n')}
                        `
                    }
                },
                ...cmds
            }}
            promptLabel={prompt} 
            autoFocus
            style={{
                backgroundColor:null,
                minHeight: null,
                maxHeight: null,
                overflow: 'auto',
                height: '100%',
                width: '100%',     
            }}
            styleEchoBack='fullInherit'
            contentStyle={{ color: '#0e6b0e' , fontWeight: 'normal', paddingLeft: null}} // Text colour
            promptLabelStyle={{ color: '#ff5555' , fontWeight:'normal'}} // Prompt label colour
            inputTextStyle={{ color: '#0e6b0e' , fontWeight: 'normal'}}
            messageStyle={{ color: '#0e6b0e' , fontWeight: 'normal', paddingLeft: null}}
            scrollBehavior='auto'
            noDefaults
        />
    )
}