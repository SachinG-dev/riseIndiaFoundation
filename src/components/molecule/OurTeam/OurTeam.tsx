import React from "react";
import TeamMemberCard from "../../atom/TeamMemberCard/TeamMemberCard";

export function OurTeam() {
  const teamMembers = [
    {
      imageUrl: "/assets/images/silviaMathew.png",
      name: "Silvia Mathew",
      description:
        "Passionate advocate for inclusivity and empowerment. Silvia, with a Bachelor's degree in Electronics and Communications and a Master's degree in Social Work, dedicates her expertise to research, job analysis, training, and placement activities for individuals with disabilities. Her remarkable success in facilitating candidates' transition into new sectors is commendable. With an extensive background spanning Prison Rehabilitation, Women Empowerment, Education, Training, and Youth Employment, Silvia's multifaceted knowledge and skills have made a profound impact on countless lives.",
    },
    {
      imageUrl: "/assets/images/nirlofarJailor.png",
      name: "Nirlofar Jailor",
      description:
        "Nilofar, a compassionate guide on the journey of self-discovery and growth. With a master's degree in counselling psychology and over a decade of experience in the developmental sector, she excels in career and academic counselling. As a skilled facilitator, she conducts impactful life skills and career workshops for parents, teachers, and students. Join Nilofar as she empowers individuals to unlock their true potential and navigate their path towards success.",
    },
    {
      imageUrl: "/assets/images/rajeshwariPhadtare.png",
      name: "Rajeshwari Phadtare",
      description:
        "Rajeshwari Phadtare is passionate about driving positive change in our society. She completed her MBA in Social Entrepreneurship, NMIMS, Mumbai. Experienced in successfully implementing projects at Rise India Foundation, she plays a vital role in stakeholder management, project design, implementation & reporting. She is deeply committed to promoting women's employment, gender equality, and environment conservation.",
    },
    {
      imageUrl: "/assets/images/gayatriJadhav.png",
      name: "Gayatri Jadhav",
      description:
        "Gayatri, a distinguished graduate in B.com and Law, possesses a profound understanding of criminal law, compliance, and company law. Her expertise proves invaluable in assisting our NGO beneficiaries, particularly women and children. As a guiding light to the Rise India Foundation, her knowledge empowers us to make a meaningful impact.",
    },
  ];
  const description =
    "Our team comprises experienced professionals from diverse backgrounds, each bringing unique skills and expertise to our organization. We value open communication and actively seek feedback to continually improve our initiatives and better serve the communities we work with. Rest assured, when you reach out to us, you will be greeted with warmth, empathy, and a genuine desire to make a positive impact.";
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <p>{description}</p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="col">
            <TeamMemberCard
              imageUrl={member.imageUrl}
              name={member.name}
              description={member.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
