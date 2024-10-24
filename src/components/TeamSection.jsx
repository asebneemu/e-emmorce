import TeamCart from './TeamCart';  // TeamCart bileşeni
import { teamData } from "../data"

export default function TeamSection() {
    return (
        <div className="w-full flex justify-center p-8 mb-5">
            <div className="flex 3xs:flex-col md:flex-row justify-center gap-8">
                {teamData.map(member => (
                    <TeamCart 
                        key={member.id}
                        image={member.image}
                        name={member.name}
                        status={member.status}
                        instagram={member.instagram}
                        github={member.github}
                        linkedin={member.linkedin}
                    />
                ))}
            </div>
        </div>
    );
}
