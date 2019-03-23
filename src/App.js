import React, {Component} from 'react';
import './App.css';
import ProjectSelector from './components/project_selector/project_selector';
import projects from '../src/content/project_content';

class App extends Component
{

    render()
    {
        return (
            <div className="container">
                <h1>Brandon Saunders</h1>
                <p>Software Engineer who enjoys learning new things...</p>
                <h3>Projects</h3>
                <div className="col project-menu-container">
                    {projects.map(function(object, i) {
                        return (
                            <div class="row project-menu">
                                <ProjectSelector key={i} {...object} />
                            </div>);
                        }
                    )}
                </div>
            </div>
        );
    }
}


export default App;
