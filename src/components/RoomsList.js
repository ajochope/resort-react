import React from 'react'
import Room from './Room';

export default function RoomsList({rooms}) {
    if(rooms.lenght === 0){
        return (
            <div className="empty-search">
                <h3>Unfortunatelly no rooms matched your filtsectionsetup</h3>
            </div>
        )
    }
    return (
        <section className="roomlist">
            <div className="roomlist-center">
                {rooms.map(item => {
                    return <Room key={item.id} room={item} />;
                })}
            </div>
        </section>
    );
}
