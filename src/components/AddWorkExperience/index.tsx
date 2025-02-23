import SaveButton from "./AddWorkExperienceButton";
import AddWorkExperienceInputBox from "./AddWorkExperienceInputBox";



const AddWorkExperience = () => {

    return (
        <div className="m-20">
            <h1 className="text-2xl mb-2 font-semibold">Work Experience</h1>
            <AddWorkExperienceInputBox title="Job Title"/>
            <AddWorkExperienceInputBox title="Company"/>
            <AddWorkExperienceInputBox title="Duration"/>
            <SaveButton title="Save"/>
        </div>
    )
}

export default AddWorkExperience;