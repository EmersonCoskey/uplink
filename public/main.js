import { gsap } from "/modules/gsap-core.js";
import { TextPlugin} from "/modules/TextPlugin.js";

gsap.registerPlugin(TextPlugin);

const sampleTexts = [
    'beep boop',
    '/kill xX_NoobMaster_Xx',
    'The opposite of Microsoft is Bighard.',
    'Look over there! . . . . . . . . gotcha :)',
    'Ohio was a warning.',
    'AIs definitely aren\'t real and are in no way watching you read this.',
    'Remote Control for Minecraft servers? Must be magic.',
    'it\'s not healthy to feed your computer cheese.',
    '. . . . . . . . 👌',
    'You\'re gonna have a bad time.',
    'Add your commands to the queue!',
    'Teleport your friend into the sky, they won\'t know :)',
    'pssst-- your "friends" are griefing your house.',
    'sajiv',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'JavaScript is suffering.',
    'You\'re lucky you didn\'t have to make this.',
    'Your Wii is not thirsty. It does not want orange juice.',
];

/*[TIMELINE START]***********************************

var timeline;
timeline = gsap.timeline({repeat: -1, repeatRefresh: true});

timeline.to(".CmdInput", {
    duration: 4,
    text: gsap.utils.random(sampleTexts, true),
    ease: "power1.inOut"
});

timeline.to(".CmdInput", {text: "", duration: 0.5, delay: 3});

/*[TIMELINE END]*************************************/

var textfocus = false;
document.querySelectorAll('.CmdInput').forEach(item => {
    item.addEventListener('focus', event => {
        if (!textfocus) {
            gsap.set('.CmdInput', {text: ""});
            timeline.kill();
            textfocus = true;
            console.log('sampletext disabled');
        }
    });
}); 