import React from 'react';
import Card from './Card';
const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map(
                    (user, i) => {
                        return(
                            <Card
                                key={user.id}
                                id={user.id}
                                name={user.name}
                                email={user.email}
                                // key={i}
                                // id={robots[i].id}
                                // name={robots[i].name}
                                // email={robots[i].email}
                            />

                        );

                    })
             }
        </div>
    );
}

export default CardList;
