import React from 'react';

import Icon from "./Icon";

class ProfileCard extends React.Component {
    constructor(props) {
        super(props);

        this.handleChoice = this.handleChoice.bind(this);
    }

    handleChoice() {
        const cardItemData = {

        };

        this.props.onClick(this.props.id,this.props.name);
    }

    render() {
        return (
            <div className={`profile-card${this.props.mod ? ' -'+this.props.mod:``}`} onClick={this.handleChoice}>
                <div className="content">
                    <ul className="inform-list">
                        <li className="item -icon"><Icon name={this.props.image}/></li>
                        <li className="item -inline">{this.props.name}</li>
                        <li className="item -inline">{this.props.age}</li>
                        <li className="item">{this.props.phone}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ProfileCard;