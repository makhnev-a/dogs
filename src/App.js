import React from 'react';
import './App.css';
import styles from './dogs.module.css';
import Item from './components/Item';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {image: '', id: 0},
                {image: '', id: 1},
                {image: '', id: 2},
                {image: '', id: 3},
                {image: '', id: 4},
                {image: '', id: 5},
                {image: '', id: 6},
                {image: '', id: 7},
                {image: '', id: 8}
            ],
            randomItem: 0,
            count: 0
        };
    }

    clickedFn = (num) => {
        this.setState({
            count: this.state.count + 1
        });
    };

    componentDidMount() {
        setInterval(() => {
            let num = Math.floor(Math.random() * 9);
            this.setState({
                randomItem: num
            });
        }, 1000);
    }

    render() {
        let itemArr = this.state.items.map((item) => (
            <Item
                clickedFn={this.clickedFn}
                id={item.id}
                image={this.state.randomItem === item.id}
                key={item.id}
            />
        ));

        return (
            <section className={styles.wrapper}>
                <div className={styles.dogsBlock}>
                    {itemArr}
                </div>
                <span>{this.state.count}</span>
            </section>
        );
    }
}

export default App;