import React from "react";
import styles from "../dogs.module.css";
import img from '../dog.jpg';

class Item extends React.Component {
    render() {
        return (
            <div
                className={styles.dogsBlock_item}
            >
                {
                    this.props.image
                        ? <img
                            src={img}
                            onClick={this.props.clickedFn}
                            alt=""/>
                        : null
                }
            </div>
        );
    }
}

export default Item;