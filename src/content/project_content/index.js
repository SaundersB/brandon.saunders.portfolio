import heart_cup_landing from '../../assets/images/heart_cup_landing_page.png';
import xandr_reward_card_landing from '../../assets/images/xandrrewardcard.png';
import pet_photo_screenshot from '../../assets/images/pet_photo.png';
import multiplier_finder_screenshot from '../../assets/images/multiplier_finder.png';
import space_invaders_screenshot from '../../assets/images/space_invaders.png';
import metal_alloy_x_ray_automation from '../../assets/images/metal_alloy_x_ray_automation.png';
import digital_signage_virtual_scoreboard_screenshot from '../../assets/images/virtual_scoreboard.png';
import digital_signage_4K_content_player_screenshot from '../../assets/images/digital_signage_content_player.png';
import digital_signage_electronic_shelf_label_screenshot from '../../assets/images/electronic_shelf_labels.png';

let projects = [
    {
        'name': 'Heart Cup',
        'description': 'Heart Cup was founded on the simple idea of connecting people with their communities - one place,' +
            ' one cause, one heart at a time. Heart Cup empowers you to take up causes that you are passionate about.' +
            ' It enables you to make an impact where you think change is needed. This is a place where “likes” have the' +
            ' ability to change lives. So join us on our quest to become a community built on giving!',
        'url': 'https://heartcup.com',
        'imageUrl': heart_cup_landing,
        'organization': 'Heart Cup',
        'tags': 'VueJS, Laravel, PHP, JavaScript',
    },
    {
        'name': 'Xandr Reward Card',
        'description': 'AT&T owned Xandr Advertising prepaid debit card incentive program. Web portal for employees to' +
            ' send redemption codes to other coworkers. Employees can then redeem their redemption code for a physical' +
            ' or virtual prepaid debit card.',
        'url': 'https://xandrrewardcard.com',
        'imageUrl': xandr_reward_card_landing,
        'organization': 'JNR Inc.',
        'tags': 'VueJS, Laravel, PHP, JavaScript',
    },
    {
        'name': 'Pet Photo iOS App',
        'description': 'Get your pet\'s attention when taking photos with other pet noises! Simply press the button of' +
            ' the respective pet sound and when your pet is looking at the camera tap anywhere on the screen. You\'ll' +
            ' see a small preview window in the bottom left corner of the screen. Tap the window to save the photo to' +
            ' your camera roll!',
        'url': 'https://itunes.apple.com/us/app/petphoto/id1178333966?mt=8',
        'imageUrl': pet_photo_screenshot,
        'organization': 'Open Source',
        'tags': 'Swift',
    },
    {
        'name': 'Multiplier Finder',
        'description': 'Learn or brush up on your multiplication tables with this iOS app. Similar to the traditional ' +
            'method of writing your multiplication tables and answers on flash card, you can practice for free. Select ' +
            'the set of times tables you would like to practice and swipe left and right to reveal the answer. Swipe ' +
            'down to return to the selection menu.',
        'url': 'https://itunes.apple.com/us/app/multiplier-finder/id1178339564',
        'imageUrl': multiplier_finder_screenshot,
        'organization': 'Open Source',
        'tags': 'Swift',
    },
    {
        'name': 'Digital Signage 4K LED/LCD Content Player',
        'description': 'Digital Signage 4K Android content player for the express usage of scheduling video, images,' +
            ' and advertisements.',
        'url': 'https://www.dropbox.com/s/arwoyv376wftec6/java_digital_signage_player.mov?dl=0',
        'videoUrl': 'https://www.youtube.com/embed/HvbtS2QyCNk',
        'imageUrl': digital_signage_4K_content_player_screenshot,
        'organization': 'Vantage LED',
        'tags': 'Java',
    },
    {
        'name': 'Electronic Shelf Label Price Integration',
        'description': 'Integration and automation of price updates on e-Paper Electronic Shelf Labels.',
        'url': '',
        'imageUrl': digital_signage_electronic_shelf_label_screenshot,
        'organization': 'Vantage LED',
        'tags': 'Java',
    },
    {
        'name': 'Digital Signage Virtual Scoreboard',
        'description': 'Electro-Mech hardware console integration with a virtual scoreboard on an LED digital sign. ' +
            'Additionally, an Android application to control the virtual scoreboard on the LED digital sign.',
        'url': 'https://www.dropbox.com/s/5injzv6o6lsnkrt/tablet_scoreboard_controller.mov?dl=0',
        'videoUrl': '',
        'imageUrl': digital_signage_virtual_scoreboard_screenshot,
        'organization': 'Vantage LED',
        'tags': 'Python, ActionScript',
    },
    {
        'name': 'Digital Signage Virtual Scoreboard Android Application',
        'description': 'Android application to control a virtual scoreboard that will be displayed on a digital LED sign.',
        'url': 'https://www.dropbox.com/s/5injzv6o6lsnkrt/tablet_scoreboard_controller.mov?dl=0',
        'videoUrl': 'https://www.youtube.com/embed/VA_siC4pF8k',
        'imageUrl': '',
        'organization': 'Vantage LED',
        'tags': 'Java',
    },
    {
        'name': 'Watson Metal Alloy X-Ray Automation',
        'description': 'The automated QA process for a Watson X-Ray metal concentration analysis gun written in Java ' +
            'for an Android application that controls the gun.',
        'url': 'https://www.dropbox.com/s/dt2b66rkuyot9t0/metal_alloy_automated_qa.mov?dl=0',
        'videoUrl': 'https://www.youtube.com/embed/AsneadNXPMA',
        'imageUrl': metal_alloy_x_ray_automation,
        'organization': 'Tribogenics',
        'tags': 'Java',
    },
    {
        'name': 'Watson Metal Alloy X-Ray Gun Internal Development Tool Suite',
        'description': 'Each Watson X-Ray gun required interfacing by several teams in the organization. Before I ' +
            'joined each team relied upon the software team to investigate issues. I wrote an interactive command line ' +
            'utility script to interface with the Watson gun for the spectral analysis, production, and QA teams to ' +
            'troubleshoot and manage the Watson X-Ray gun. These scripts packaged the Android Debug Bridge tool so that ' +
            'knowledge of how to utilize the Android Debug Bridge wasn\'t required',
        'url': 'https://www.dropbox.com/s/dt2b66rkuyot9t0/metal_alloy_automated_qa.mov?dl=0',
        'videoUrl': '',
        'imageUrl': metal_alloy_x_ray_automation,
        'organization': 'Tribogenics',
        'tags': 'BASH, PowerShell',
    },
    {
        'name': 'Space Invaders',
        'description': 'A modern rendition of the class Space Invaders written in the JavaScript Phaser library.',
        'url': 'http://saundersb.github.io/SpaceInvaders/',
        'imageUrl': space_invaders_screenshot,
        'organization': 'College',
        'tags': 'JavaScript, Phaser',
    },
];


export default projects;
