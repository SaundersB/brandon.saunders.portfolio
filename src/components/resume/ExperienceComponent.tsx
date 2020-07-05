import Project from "../../lib/entities/Project";
import Experience from "../../lib/entities/Experience";

interface ExperienceComponentInterface {
    experience: any
}


export default function ProjectComponent(props: ExperienceComponentInterface) {
    const experience = props.experience;
    const experienceObj = new Experience(experience);


}
