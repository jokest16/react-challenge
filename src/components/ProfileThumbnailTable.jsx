import React from 'react';

import ProfileCard from './ProfileCard';

function ProfileThumbnailTable(props) {
    return (
        <div className="profile-table">
            <ul className="titles">
                <li className="item">Image</li>
                <li className="item">Name</li>
                <li className="item">Age</li>
                <li className="item">Phone</li>
            </ul>
            <div className="content">
                {props.data.map(item => {
                      return  <ProfileCard mod="row"
                                     key={item.id}
                                     image={item.image}
                                     name={item.name}
                                     age={item.age}
                                     phone={item.phone}
                                     phrase={item.phrase}
                                     onClick={props.onChoice}
                              />
                    })
                }
            </div>
        </div>
    );
}

export default ProfileThumbnailTable;