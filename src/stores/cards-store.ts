import {defineStore} from 'pinia'
import {CardType} from "@/types/card.type.ts";

export const useCardsStore = defineStore('cards', {
    state: () => ({
        cards: [
            {
                title: 'Uptime',
                subtitle: 'Uptime over the past 24 hours',
                label: '97.83%',
                icon: 'eject',
                image: 'chart.png'
            },
            {
                title: 'Waxpeer online & status',
                subtitle: ' ',
                isLongCard: true,
                longCardItems: [
                    {
                        title: '12698',
                        subtitle: 'extension'
                    },
                    {
                        title: '5898',
                        subtitle: 'desktop'
                    },
                    {
                        title: '25697',
                        subtitle: 'mobile'
                    }
                ]
            },
            {
                title: 'Current date',
                subtitle: 'Current date and time',
                label: '08.06.2022',
                icon: 'eject',
                time: '19:55:20'
            },
            {
                title: 'Withdrawal status',
                subtitle: 'Connected cryptocurrencies',
                icon: 'bitcoin',
                iconLinks: [
                    {
                        image: 'tether.png',
                        link: 'https://darklektor.github.io/portfolio-minimal/'
                    },
                    {
                        image: 'triangle.png',
                        link: 'https://darklektor.github.io/portfolio-minimal/'
                    },
                    {
                        image: 's-link.png',
                        link: 'https://darklektor.github.io/portfolio-minimal/'
                    },
                ]
            },
            {
                title: 'Buy items',
                subtitle: 'Time from the last purchase',
                label: '25 sec',
                icon: 'dollar'
            },
            {
                title: 'Waxpeer pay bots',
                subtitle: 'The number of avaliable bots on Wxpeer pay',
                label: '259 bots',
                icon: 'robo-face'
            },
            {
                title: 'Waxpeer pay',
                subtitle: 'The last successful trade',
                label: '10 sec',
                icon: 'pay',
            },
            {
                title: 'Availability of a site',
                subtitle: 'The availability of the home page of the site',
                label: 'available',
                icon: 'calendar',
                textClass: 'text-success'
            },
            {
                title: 'Server status',
                subtitle: 'The status of the website servers',
                label: 'unstable',
                icon: 'cloud',
                textClass: 'text-warning'
            },
            {
                title: 'Steam Web API',
                subtitle: 'Last check June 3, 2022 02:50:16',
                label: 'stable',
                icon: 'steam',
                textClass: 'text-success'
            },
            {
                title: 'API response',
                subtitle: 'Last request 10 seconds ago',
                label: '2.856 ms',
                icon: 'settings',
            },
            {
                title: 'Last trade',
                subtitle: 'The last trade was created 5s ago',
                label: 'canceled',
                icon: 'cart',
                textClass: 'text-danger'
            },
            {
                title: 'Login',
                subtitle: 'Shows either your login is working or not',
                label: 'active',
                icon: 'user',
                textClass: 'text-success'
            }
        ] as CardType[]
    }),
    getters: {
        // doubleCount: (state) => state.count * 2,
    },
    actions: {
        // increment() {
        //     this.count++
        // },
    },
})
