/* eslint-disable import/no-anonymous-default-export */
import getcat from "../../utils/cat"
import getnp from "../../utils/spotify"
export default {
    commands: {
        echo: {
            description: 'Prints the given text to the console',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
        // cat: {
        //     description: 'Get a cute cat image.',
        //     usage: 'cat',
        //     fn: async () => {
        //         const url = await getcat()
        //         window.open(url, '_blank')
        //         return "fetching cat...\ncat fetched successfully!"
        //     }
        // },
        about: {
            description: 'About Me.',
            usage: 'about',
            fn: () => {
                return "About Us.\n---\nwizards\ndevs\nhackers\ngangsta\nantisocial\ntime traveler\n---\n"
            }
        },
        twitter: {
            description: 'Opens my Twitter Handle.',
            usage: 'twitter',
            fn: () => {
                window.open('https://twitter.com/Gun__Dalf', '_blank')
                return "opening twitter handle..."
            }
        },
        github: {
            description: 'Opens my GitHub Profile.',
            usage: 'twitter',
            fn: () => {
                window.open('https://github.com/GunDalf101', '_blank')
                return "opening github account..."
            }
        },
        discord: {
            description: 'Opens my Discord Account.',
            usage: 'twitter',
            fn: () => {
                window.open('https://discordapp.com/users/583399997748412416', '_blank')
                return "opening discord account..."
            }
        },
        
        
        projects: {
            description: 'Projects I have worked on.',
            usage: 'projects',
            fn: () => {
                return `
                    Cool projects We have worked on.\n---\n
                    [Redacted]'\n---\n
                `
            }
        },
        
        repo: {
            description: "Opens this website's github repository.",
            usage: 'repo',
            fn: () => {
                window.open("https://github.com/GunDalf101/unknown-gang", '_blank')
                return "opening repository..."
            }
        },
        spotify: {
            description: 'Get info about my recently played song.',
            usage: 'spotify',
            fn: async () => {
                const item = await getnp()
                return `
                    Now Playing/Recently Played\n
                    ---\n
                    Song: ${item.song}\n
                    Artist: ${item.artist}\n---\n
                `
            }
        }
    },
    overwrites:{
        help: {
            description: 'List all available commands',
            usage: 'help',
        },
        cd: {
            description: 'Change directory, not really, lol!',
            usage: 'cd <directory>',
        },
        ls: {
            description: 'List files in the current directory',
            usage: 'ls',
        },
        mkdir: {
            description: 'Make a directory',
            usage: 'mkdir <directory>',
        },
        clear: {
            description: 'Clears the terminal',
            usage: 'clear'
        },
        cat: {
            description: 'Get a cute cat image.',
            usage: 'cat',
        }
    }
}
