import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Play! Listen! Guess!',
    subHeading: 'Get your party mode on!',
    text: 'GrooveGuess is the up-and-coming game app that lifts the mood of your party. Play song trivia and guess the artists, era, and album with a variety of rewards and features that will compel everyone to join in and have a good time',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Prove it!',
    subHeading: 'BOOK YOUR CAR TODAY!',
    features: [
        {
            title: 'Songs',
            description: 'Connect GrooveGuess to your streaming service so you can play songs you like.',
            icon: 'music-melody'
        },
        {
            title: 'Trivia',
            description: 'Divide your guests into teams for a party game.',
            icon: 'bright-idea'
        },
        {
            title: 'Points',
            description: 'Every time you guess correctly or wrong the points will surge or drop.',
            icon: 'star-points'
        },
        {
            title: 'Prizes',
            description: 'Activate the prize feature so that the winners can level up. ',
            icon: 'prizes'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'Have you ever heard a tune and racked your brains to remember what song it is? Nothing compares to the satisfying feeling of finally getting it right. While songs can make us collectively blurt out lyrics in unison, they can also be incredibly nostalgic for everyone. Move over setting up games from scratch when hosting a party. Just download the GrooveGuess app and create an atmosphere that vibes with the occasion. You can play a game of guessing the artist, year, album, or song. It does not matter if you are a noob or a pro. The songs will have you taking a trip down memory lane, singing along, and competing with the others to show off your musical and pop culture knowledge.',
    ],
}

export const benefitsContent = {
    heading: 'More than a fun-filled experience',
    text: 'With GrooveGuess you get to liven up your social gathering and have everyone talking about your soiree for some time to come.',
    benefits: [
        {
            title: 'Play with Friends',
            description: 'Connect with your network in a way that they always enjoy your company.',
            icon: 'celebration'
        },
        {
            title: 'Musical Genres',
            description: 'Got a preference? Pick the genre you want to exclusively listen and play with by always being in control of choosing the artist or song.',
            icon: 'star-music'
        },
        {
            title: 'Game Features',
            description: 'Mix it up with the lifeline option and the drinking game feature where the loser takes a shot.',
            icon: 'reard-ribons'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is GrooveGuess Compatible with Android or iOS?',
            answer: 'The answer will be here......',

        },
        {
            question: 'How do I get in touch with someone if there is something wrong with my profile?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'Do I have to have a set number of people to play GrooveGuess?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Get the Party Started!',
    text: 'Download the app today and start guessing.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    whyUsBtn: `Why ${siteName}?`,
    ctaBtn: 'Download App',
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
