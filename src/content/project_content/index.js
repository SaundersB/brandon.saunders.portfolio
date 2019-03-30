import heart_cup_landing from '../../assets/images/heart_cup_landing_page.png';
import xandr_reward_card_landing from '../../assets/images/xandrrewardcard.png';
import pet_photo_screenshot from '../../assets/images/pet_photo.png';
import multiplier_finder_screenshot from '../../assets/images/multiplier_finder.png';
import space_invaders_screenshot from '../../assets/images/space_invaders.png';
import metal_alloy_x_ray_automation from '../../assets/images/metal_alloy_x_ray_automation.png';
import digital_signage_virtual_scoreboard_screenshot from '../../assets/images/virtual_scoreboard.png';
import digital_signage_4K_content_player_screenshot from '../../assets/images/digital_signage_content_player.png';
import digital_signage_electronic_shelf_label_screenshot from '../../assets/images/electronic_shelf_labels.png';
import nexofuelcard from '../../assets/images/nexofuelcard.png';
import portfolio from '../../assets/images/portfolio_site.png';
import {
    ORGANIZATION_KEY_NAME, PROJECT_DESCRIPTION_NAME,
    PROJECT_IMAGE_URL_NAME,
    PROJECT_NAME,
    PROJECT_TAGS_NAME,
    PROJECT_URL_NAME,
} from '../../helpers/constants';

let projects = [
    {
        [PROJECT_NAME]: 'Heart Cup',
        [PROJECT_DESCRIPTION_NAME]: 'Heart Cup was founded on the simple idea of connecting people with their communities - one place,' +
            ' one cause, one heart at a time. Heart Cup empowers you to take up causes that you are passionate about.' +
            ' It enables you to make an impact where you think change is needed. This is a place where “likes” have the' +
            ' ability to change lives. So join us on our quest to become a community built on giving!',
        [PROJECT_URL_NAME]: 'https://heartcup.com',
        [PROJECT_IMAGE_URL_NAME]: heart_cup_landing,
        [ORGANIZATION_KEY_NAME]: 'Heart Cup',
        [PROJECT_TAGS_NAME]: 'VueJS, Laravel, PHP, JavaScript',
    },
    {
        [PROJECT_NAME]: 'Xandr Reward Card',
        [PROJECT_DESCRIPTION_NAME]: 'AT&T owned Xandr Advertising prepaid debit card incentive program. Web portal for employees to' +
            ' send redemption codes to other coworkers. Employees can then redeem their redemption code for a physical' +
            ' or virtual prepaid debit card.',
        [PROJECT_URL_NAME]: 'https://xandrrewardcard.com',
        [PROJECT_IMAGE_URL_NAME]: xandr_reward_card_landing,
        [ORGANIZATION_KEY_NAME]: 'JNR Inc.',
        [PROJECT_TAGS_NAME]: 'VueJS, Laravel, PHP, JavaScript',
    },
    {
        [PROJECT_NAME]: 'Hyundai Nexo Fuel Card',
        [PROJECT_DESCRIPTION_NAME]: 'Hyundai provides a prepaid debit card with each Hyundai Nexo hydrogen fuel car. Once a ' +
            'recipient receives their fuel card they have the ability to activate, check their account balance and' +
            'see transactions made with their card.',
        [PROJECT_URL_NAME]: 'https://nexofuelcard.com',
        [PROJECT_IMAGE_URL_NAME]: nexofuelcard,
        [ORGANIZATION_KEY_NAME]: 'JNR Inc.',
        [PROJECT_TAGS_NAME]: 'Drupal, PHP',
    },
    {
        [PROJECT_NAME]: 'Portfolio Site',
        [PROJECT_DESCRIPTION_NAME]: 'The current website you\'re viewing is a React based portfolio site highlighting my experience and projects.',
        [PROJECT_URL_NAME]: 'https://saundersb.github.io/brandon.saunders.portfolio',
        [PROJECT_IMAGE_URL_NAME]: portfolio,
        [ORGANIZATION_KEY_NAME]: 'Open Source',
        [PROJECT_TAGS_NAME]: 'React, JavaScript',
    },
    {
        [PROJECT_NAME]: 'Pet Photo iOS App',
        [PROJECT_DESCRIPTION_NAME]: 'Get your pet\'s attention when taking photos with other pet noises! Simply press the button of' +
            ' the respective pet sound and when your pet is looking at the camera tap anywhere on the screen. You\'ll' +
            ' see a small preview window in the bottom left corner of the screen. Tap the window to save the photo to' +
            ' your camera roll!',
        [PROJECT_URL_NAME]: 'https://itunes.apple.com/us/app/petphoto/id1178333966?mt=8',
        [PROJECT_IMAGE_URL_NAME]: pet_photo_screenshot,
        [ORGANIZATION_KEY_NAME]: 'Open Source',
        [PROJECT_TAGS_NAME]: 'Swift',
    },
    {
        [PROJECT_NAME]: 'Multiplier Finder',
        [PROJECT_DESCRIPTION_NAME]: 'Learn or brush up on your multiplication tables with this iOS app. Similar to the traditional ' +
            'method of writing your multiplication tables and answers on flash card, you can practice for free. Select ' +
            'the set of times tables you would like to practice and swipe left and right to reveal the answer. Swipe ' +
            'down to return to the selection menu.',
        [PROJECT_URL_NAME]: 'https://itunes.apple.com/us/app/multiplier-finder/id1178339564',
        [PROJECT_IMAGE_URL_NAME]: multiplier_finder_screenshot,
        [ORGANIZATION_KEY_NAME]: 'Open Source',
        [PROJECT_TAGS_NAME]: 'Swift',
    },
    {
        [PROJECT_NAME]: 'Digital Signage 4K LED/LCD Content Player',
        [PROJECT_DESCRIPTION_NAME]: 'Digital Signage 4K Android content player for the express usage of scheduling video, images,' +
            ' and advertisements.',
        [PROJECT_URL_NAME]: 'https://www.dropbox.com/s/arwoyv376wftec6/java_digital_signage_player.mov?dl=0',
        'videoUrl': 'https://www.youtube.com/embed/HvbtS2QyCNk',
        [PROJECT_IMAGE_URL_NAME]: digital_signage_4K_content_player_screenshot,
        [ORGANIZATION_KEY_NAME]: 'Vantage LED',
        [PROJECT_TAGS_NAME]: 'Java',
    },
    {
        [PROJECT_NAME]: 'Electronic Shelf Label Price Integration',
        [PROJECT_DESCRIPTION_NAME]: 'Integration and automation of price updates on e-Paper Electronic Shelf Labels.',
        [PROJECT_URL_NAME]: '',
        [PROJECT_IMAGE_URL_NAME]: digital_signage_electronic_shelf_label_screenshot,
        [ORGANIZATION_KEY_NAME]: 'Vantage LED',
        [PROJECT_TAGS_NAME]: 'Java',
    },
    {
        [PROJECT_NAME]: 'Digital Signage Virtual Scoreboard',
        [PROJECT_DESCRIPTION_NAME]: 'Electro-Mech hardware console integration with a virtual scoreboard on an LED digital sign. ' +
            'Additionally, an Android application to control the virtual scoreboard on the LED digital sign.',
        [PROJECT_URL_NAME]: 'https://www.dropbox.com/s/5injzv6o6lsnkrt/tablet_scoreboard_controller.mov?dl=0',
        'videoUrl': '',
        [PROJECT_IMAGE_URL_NAME]: digital_signage_virtual_scoreboard_screenshot,
        [ORGANIZATION_KEY_NAME]: 'Vantage LED',
        [PROJECT_TAGS_NAME]: 'Python, ActionScript',
    },
    {
        [PROJECT_NAME]: 'Digital Signage Virtual Scoreboard Android Application',
        [PROJECT_DESCRIPTION_NAME]: 'Android application to control a virtual scoreboard that will be displayed on a digital LED sign.',
        [PROJECT_URL_NAME]: 'https://www.dropbox.com/s/5injzv6o6lsnkrt/tablet_scoreboard_controller.mov?dl=0',
        'videoUrl': 'https://www.youtube.com/embed/VA_siC4pF8k',
        [PROJECT_IMAGE_URL_NAME]: '',
        [ORGANIZATION_KEY_NAME]: 'Vantage LED',
        [PROJECT_TAGS_NAME]: 'Java',
    },
    {
        [PROJECT_NAME]: 'Watson Metal Alloy X-Ray Automation',
        [PROJECT_DESCRIPTION_NAME]: 'The automated QA process for a Watson X-Ray metal concentration analysis gun written in Java ' +
            'for an Android application that controls the gun.',
        [PROJECT_URL_NAME]: 'https://www.dropbox.com/s/dt2b66rkuyot9t0/metal_alloy_automated_qa.mov?dl=0',
        'videoUrl': 'https://www.youtube.com/embed/AsneadNXPMA',
        [PROJECT_IMAGE_URL_NAME]: metal_alloy_x_ray_automation,
        [ORGANIZATION_KEY_NAME]: 'Tribogenics',
        [PROJECT_TAGS_NAME]: 'Java',
    },
    {
        [PROJECT_NAME]: 'Watson Metal Alloy X-Ray Gun Internal Development Tool Suite',
        [PROJECT_DESCRIPTION_NAME]: 'Each Watson X-Ray gun required interfacing by several teams in the organization. Before I ' +
            'joined each team relied upon the software team to investigate issues. I wrote an interactive command line ' +
            'utility script to interface with the Watson gun for the spectral analysis, production, and QA teams to ' +
            'troubleshoot and manage the Watson X-Ray gun. These scripts packaged the Android Debug Bridge tool so that ' +
            'knowledge of how to utilize the Android Debug Bridge wasn\'t required',
        [PROJECT_URL_NAME]: 'https://www.dropbox.com/s/dt2b66rkuyot9t0/metal_alloy_automated_qa.mov?dl=0',
        'videoUrl': '',
        [PROJECT_IMAGE_URL_NAME]: metal_alloy_x_ray_automation,
        [ORGANIZATION_KEY_NAME]: 'Tribogenics',
        [PROJECT_TAGS_NAME]: 'BASH, PowerShell',
    },
    {
        [PROJECT_NAME]: 'Space Invaders',
        [PROJECT_DESCRIPTION_NAME]: 'A modern rendition of the class Space Invaders written in the JavaScript Phaser library.',
        [PROJECT_URL_NAME]: 'http://saundersb.github.io/SpaceInvaders/',
        [PROJECT_IMAGE_URL_NAME]: space_invaders_screenshot,
        [ORGANIZATION_KEY_NAME]: 'College',
        [PROJECT_TAGS_NAME]: 'JavaScript, Phaser',
    },
];


export default projects;
