import React from 'react';
import Avatar from 'boring-avatars';
import './Team.css';

const Team = () => {
    const teamMembers = [
        { name: 'Risto-Pekka Siponen' },
        { name: 'Soma Zambelly' },
        { name: 'Xiong Xiong' },
        { name: 'Tuan Vu' },
        { name: 'Nhat Hong' }
    ];

    return (
        <section className="full-page team">
            <h2>Meet the Team</h2>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div key={member.name} className="team-member">
                        <Avatar
                            size={100}
                            name={member.name}
                            variant="beam"
                            colors={["#92A1C6", "#F0AB3D", "#C271B4", "#C20D90", "#F57F17"]}
                        />
                        <p>{member.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;