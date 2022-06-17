/* eslint-disable import/no-anonymous-default-export */
import getspell from "../../utils/spells"
import getnp from "../../utils/spotify"
import getactivity from "../../utils/bored"
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

        bored: {
            description: 'Get Activity suggestions because ur life is boring.',
            usage: 'bored',
            fn: async () => {
                const result = await getactivity()
                return `
                You can\n
                ---\n
                Activity: ${result}\n---\n
                `
            },
        },


        about: {
            description: 'About Me.',
            usage: 'about',
            fn: () => {
                return "About Us.\n---\nwizards\ndevs\nhackers\ngangsta\nantisocial\ntime traveler\n---\n"
            }
        },
        twitterr: {
            description: 'Opens my Twitter Handle.',
            usage: 'twitter',
            fn: () => {
                window.open('https://twitter.com/Gun__Dalf', '_blank')
                return "opening twitter handle..."
            }
        },
        twitterrr: {
            description: 'Opens my Twitter you cant Handle.',
            usage: 'twitter',
            fn: () => {
                window.open('https://twitter.com/DevNamya', '_blank')
                return "opening twitterrr account..."
            }
        },
        discord: {
            description: 'Opens my Discord Account.',
            usage: 'discord',
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
        },
        /*ascii: {
            description: 'ascii art.',
            usage: 'ascii',
            fn: () => {
                return (
                    <div data-letter-crap="././utils/unknown.png"
                     data-lettercrap-aspect-ratio="0.0964360587"
                      data-lettercrap-letters="01"
                       data-lettercrap-words="lettercrap js damn"
                        style="height: 17px;">

                        </div>
                )
            }
        },*/
        fuck: {
            description: 'ascii art.',
            usage: 'fuck',
        spell: {
            description: 'get yo spell',
            usage: 'spell',
            fn: async () => {
                const result = await getspell()
                return `
                You can\n
                ---\n
                Spell: ${result.name}\n---\n
                `
             }
         
        },
         bored: {
            description: 'Get Activity suggestions because ur life is boring.',
            usage: 'bored',
            fn: async () => {
                const result = await getactivity()
                return `
                You can\n
                ---\n
                Activity: ${result}\n---\n
                `
             }
            
            },
        facrap: {
            description: 'philosophy of Ninja',
            usage: 'facrap',
            fn: () => {
                return (
                    <p><pre>
                        wach TAF mat ? — Yesterday\n

                        @Tiknik ostori ibno nss nass f tri9o lghaba ghna innass inass mayrikh w tarikh lkawakib kolom t7waw m3a lmirikh w dak sandwich li klinah f hilton wslt ldar t9yito fboula d lipton Zaradacht — Yesterday\n
                        Wa sir o nta wjhk ki tbsil M3ak profet zaradacht gol sb7an l 5al9 o sla lah o slm 3la sid l syad sidna zaradachg Wa dir hah Tiknik ostori — Yesterday\n
                        Zbbi cha3 fih do ki gmar lmrikh Cha3b st7mroh daro lih 3amaliyat tklikh Bnadm sona l911 brissalat tbligh Drbt fzko do ch3lat l3afia ki seegore tchlikh Zaradacht — Yesterday\n
                        wach TAF mat ? — Yesterday
                        klit loubya bnkhat tl9i7 bach t3rf krk m9wd jrb nbta d chi7 bach tch3l l3afya f krk wydrbk do ywli ch3rk bhal da7i7 wach TAF mat ? — Today
                        7obi ana taysali b ana howa jlbana Tiknik ostori — Today
                        taymss lbanana wach TAF mat ? — Today
                        labghiti t3rf chhal f sa3a swl fofana wach TAF mat ? — Today
                        fanta chrbha w tghta f manta Tiknik ostori — Today
                        wmatnsach 7dak 97ba 9anta writha lta9i gali mo3adala ghalta wach TAF mat ? — Today\n
                        dakchi d bdsm tandrba b samta tan7mr liha trma wnbol liha f dak lwjh li 3nda f lcarta ask f trmtk dima las9 Tiknik ostori — Today\n
                        salina ktabt l9wafi wbdina drb lm3ani jbt dftar nmr wglt ntkiyf jwani lyrics mn l9amar writom lpedro gali 7wani 3mrt lbard chrbt mno atay galo khwani bd9it nzid fstora sd9t bani chla mabani wach TAF mat ? — Today\n
                        ana nbni jwani w 3icha li ghnat kwani zbi kbr mn icharat lmoror d miami ktbt f keyboardi b horof hiragani writo l sahbti msato b lmani w aghsan chjr sm3atni galt ghslo awani bghaw y3rfo sahbti l9aw baha ikhwani harvard is hard nkhchi fik zbi yjik lmard Tiknik ostori — Today\n
                        nta zaml w ana ki bn nsns n9ssi tmr wsd 9ard nmchi 3ni lprof ygoli nhar jm3a kayn fard btw 20/20 jbtha w 22 la t79e9 chart mora lbac n9ra security\n
                        nwli ki mark zok lbar9 ntsrkl fl3alam n7wi l97ab mn lgharb tal chr9 ghatgoli 3lach ngolik la kan lpussy pussy makayn far9 ghi maykonch mzghb wla ni3mt lghaba lyom ghadi n7ar9  \n 
                        </pre></p>
                )
            }
        },
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
