import SectionPreview from "./project/card_preview/SectionPreview";
import Form from "./project/form/Form";


const Project = ({  data,
    errorName,
    errorSlogan,
    errorDesc,
    errorTechnologies,
    errorJob,
    errorAutor,
    errorDemo,
    errorRepo,
    previewUrl,
    successMessage,
    errorMessage,
    handleInput,
    handleCreateProject,
    updateImgProfile,
    updateImgProject,}) => {
  return (
    <section className="section">
    <SectionPreview data={data} />
    <Form
        data={data}
        errorName={errorName}
        errorSlogan={errorSlogan}
        errorDesc={errorDesc}
        errorTechnologies={errorTechnologies}
        errorJob={errorJob}
        errorAutor={errorAutor}
        errorRepo={errorRepo}
        errorDemo={errorDemo}
        previewUrl={previewUrl}
        successMessage={successMessage}
        errorMessage={errorMessage}
        handleInput={handleInput}
        handleCreateProject={handleCreateProject}
        updateImgProfile={updateImgProfile}
        updateImgProject={updateImgProject}
    />
  </section>
  );
};

export default Project
