import React, {Component} from 'react';
import './App.css';
import ProjectSelector from './components/project_selector/project_selector';

let projects = [
    {
        "name": "Heart Cup",
        "description": "",
        "url": "https://heartcup.com",
        "imageUrl": "https://d2p6nkfn96o91b.cloudfront.net/home/logo-gradient.png"
    },
    {
        "name": "Pet Photo iOS App",
        "description": "Get your pet's attention when taking photos with other pet noises! Simply press the button of the respective pet sound and when your pet is looking at the camera tap anywhere on the screen. You'll see a small preview window in the bottom left corner of the screen. Tap the window to save the photo to your camera roll!",
        "url": "https://itunes.apple.com/us/app/petphoto/id1178333966?mt=8",
        "imageUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple71/v4/97/44/31/9744313a-7449-3970-33ee-4b4bfcf5ed95/pr_source.png/246x0w.png"
    },
    {
        "name": "Multiplier Finder",
        "description": "Learn or brush up on your multiplication tables with this iOS app. Similar to the traditional method of writing your multiplication tables and answers on flash card, you can practice for free. Select the set of times tables you would like to practice and swipe left and right to reveal the answer. Swipe down to return to the selection menu.",
        "url": "https://itunes.apple.com/us/app/multiplier-finder/id1178339564",
        "imageUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple71/v4/2c/7f/2d/2c7f2d3d-b5c0-0a08-4ede-1e28c47ddb71/pr_source.png/246x0w.png"
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
                {projects.map(function(object, i){
                    return <ProjectSelector key={i} {...object} />;
                })}
            </div>
        );
    }
}


export default App;
