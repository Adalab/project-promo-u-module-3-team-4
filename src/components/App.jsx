import { useState} from "react";
import storage from "../services/localStorage";
import callToApi from "../services/api";
import "../styles/App.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SectionPreview from "./project/card_preview/SectionPreview";
import Form from "./project/form/Form";
import Hero from "./hero/Hero";
import "../styles/core/mixin.scss";
import "../styles/core/variables.scss";

function App() {

  const [data, setData] = useState(storage.get("infoFormLS", {
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    desc: "",
    technologies: "",
    job: "",
    autor: "",
    image: "https://m.media-amazon.com/images/I/51Q+jTasiGL.jpg",
    photo:
      "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }));

  const [errorName, setErrorName] = useState("");
  const [errorSlogan, setErrorSlogan] = useState("");
  const [errorDesc, setErrorDesc] = useState("");
  const [errorTechnologies, setErrorTechnologies] = useState("");
  const [errorJob, setErrorJob] = useState("");
  const [errorAutor, setErrorAutor] = useState("");
  const [errorRepo, setErrorRepo] = useState("");
  const [errorDemo, setErrorDemo] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

  const handleInput = (value) => {

    setData(value);
    storage.set('infoFormLS', value);
  };


  const handleCreateProject = () => {
   
    let hasError = false;

    const allowedCharacters = /^[a-zA-Z0-9\s'"\-\/]+$/;
    const fieldsToCheck = [
      { field: data.name, setError: setErrorName},
      { field: data.slogan, setError: setErrorSlogan},
      { field: data.technologies, setError: setErrorTechnologies},
      { field: data.desc, setError: setErrorDesc},
      { field: data.autor, setError: setErrorAutor},
      { field: data.job, setError: setErrorJob},
      { field: data.repo, setError: setErrorRepo},
      { field: data.demo, setError: setErrorDemo},
    ];
    fieldsToCheck.map(({ field, setError }) => {
      setError(!field || !field.match(allowedCharacters) ? "Campo Obligatorio" : "");
    });
    
    

    if (!hasError) {
      callToApi(data)
        .then((response) => {
          setPreviewUrl(response);
          setSuccessMessage("La tarjeta ha sido creada:");
          setErrorMessage("");
        })
        .catch((error) => {
          setErrorMessage("Error al crear la tarjeta.");
          setSuccessMessage("");
        });
    } else {
      setPreviewUrl("");
      setSuccessMessage("");
      setErrorMessage("");
    }
  };

  //html
  return (
    <>
      <div className="container">
        <Header />

        <main className="main">
          <Hero />

          <section className="section">
            <SectionPreview data = {data} avatar={avatar}/>
            <Form 
            data={data} 
            errorName = {errorName}
            errorSlogan ={errorSlogan}
            errorDesc =  {errorDesc}
            errorTechnologies ={errorTechnologies}
            errorJob = {errorJob}
            errorAutor = {errorAutor}
            errorRepo = {errorRepo}
            errorDemo = {errorDemo}
            previewUrl ={previewUrl}
            successMessage = {successMessage}
            errorMessage = {errorMessage}
            handleInput = {handleInput}
            handleCreateProject = {handleCreateProject}
            avatar={avatar}
            updateAvatar={updateAvatar}
            />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
