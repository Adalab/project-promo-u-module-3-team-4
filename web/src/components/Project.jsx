import SectionPreview from './project/card_preview/SectionPreview';
import Form from './project/form/Form';

const Project = ({
  data,
  errorName,
  errorSlogan,
  errorDesc,
  errorTechnologies,
  errorJob,
  errorAutor,
  errorDemo,
  errorRepo,
  errorImage,
  errorPhoto,
  previewUrl,
  successMessage,
  errorMessage,
  handleInput,
  handleCreateProject,
  updateImgProfile,
  updateImgProject,
  handleReset,
  nightMode,
}) => {
  return (
    <section className={nightMode ? 'sectionN' : 'section'}>
      <SectionPreview data={data} nightMode={nightMode} />
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
        errorImage={errorImage}
        errorPhoto={errorPhoto}
        previewUrl={previewUrl}
        successMessage={successMessage}
        errorMessage={errorMessage}
        handleInput={handleInput}
        handleCreateProject={handleCreateProject}
        updateImgProfile={updateImgProfile}
        updateImgProject={updateImgProject}
        handleReset={handleReset}
        nightMode={nightMode}
      />
    </section>
  );
};

export default Project;
