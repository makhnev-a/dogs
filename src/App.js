import React from 'react';
import './App.css';
import styles from './dogs.module.css';

class App extends React.Component {
    render() {
        return (
            <section className={styles.wrapper}>
                <div className={styles.dogsBlock}>
                    <div className={styles.dogsBlock_item}/>
                    <div className={styles.dogsBlock_item}/>
                    <div className={styles.dogsBlock_item}/>
                    <div className={styles.dogsBlock_item}/>
                    <div className={styles.dogsBlock_item}/>
                    <div className={styles.dogsBlock_item}/>
                    <div className={styles.dogsBlock_item}/>
                    <div className={styles.dogsBlock_item}/>
                    <div className={styles.dogsBlock_item}/>
                </div>
            </section>
        );
    }
}

export default App;
