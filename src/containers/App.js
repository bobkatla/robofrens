import React from 'react';
// import {robots} from './robots'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))  
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        // using destruct to clean the code
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        // '!lenght' is the same as 'length === 0'
        
        // if (!robots.length) {
        //     return <h1 className='tc'>Loading</h1>
        // } else {
        //     return (
        //         <div className='tc'>
        //             <h1 className='f1'>RoboFriends</h1>
        //             <SearchBox searchChange={this.onSearchChange}/>
        //             <Scroll>
        //                 <CardList robots={filteredRobots}/>
        //             </Scroll>
        //         </div>
        //     );
        // }

        return !robots.length
        ? <h1 className='tc'>Loading</h1>
        : (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;