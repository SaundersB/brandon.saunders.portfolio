import React, {Component} from 'react';
import './App.css';
import ProjectSelector from './components/project_selector/project_selector';

let projects = [
    {
        "name": "Heart Cup",
        "description": "",
        "url": "https://heartcup.com"
    },
    {
        "name": "Pet Photo iOS App",
        "description": "Get your pet's attention when taking photos with other pet noises! Simply press the button of the respective pet sound and when your pet is looking at the camera tap anywhere on the screen. You'll see a small preview window in the bottom left corner of the screen. Tap the window to save the photo to your camera roll!",
        "url": "https://itunes.apple.com/us/app/petphoto/id1178333966?mt=8"
    },
    {
        "name": "Multiplier Finder",
        "description": "Learn or brush up on your multiplication tables with this iOS app. Similar to the traditional method of writing your multiplication tables and answers on flash card, you can practice for free. Select the set of times tables you would like to practice and swipe left and right to reveal the answer. Swipe down to return to the selection menu.",
        "url": "https://itunes.apple.com/us/app/multiplier-finder/id1178339564"
    },
];

class App extends Component
{

    render()
    {
        return (
            <div className="container">
                <h1>Brandon Saunders</h1>
                <p>Software Engineer who enjoys learning new things...</p>
                <h3>Projects</h3>
                <ProjectSelector {...projects[0]}/>
                <ProjectSelector {...projects[1]}/>
            </div>
        );
    }
}


export default App;
