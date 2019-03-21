import React, {Component} from 'react';
import './App.css';
import ProjectSelector from './components/project_selector/project_selector';

let projects = [
    {
        "name": "Tribogenics",
        "description": "I worked at Tribogenics for a year."
    },
    {
        "name": "Vantage LED",
        "description": "I worked at Vantage LED for two years."
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
                <ProjectSelector {...projects[0]}/>
                <ProjectSelector {...projects[1]}/>
            </div>
        );
    }
}


export default App;
