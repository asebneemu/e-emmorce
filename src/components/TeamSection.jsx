import TeamCart from "./TeamCart"; // TeamCart bileşeni
import { teamData } from "../data";

export default function TeamSection() {
  return (
    <div className="w-full flex flex-col items-center p-8 my-20">
      {/* Başlık ve Açıklama */}
      <div className="flex flex-col text-center mb-8 3xs:items-center">
        <h1 className="3xs:text-2xl md:text-4xl font-bold uppercase">Meet Our Team</h1>
        <p className="3xs:text-base 3xs:w-[70%] md:text-lg md:w-full mt-4">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Takım Üyeleri */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-[80%] lg:w-[90%]">
        {teamData.map((member) => (
          <div className="3xs:w-[80%] sm:w-[90%] mx-auto" key={member.id}>
            <TeamCart
              image={member.image}
              name={member.name}
              status={member.status}
              instagram={member.instagram}
              github={member.github}
              linkedin={member.linkedin}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
