import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import './Upload.css';
import axios from "axios";
import { Navbar, Side } from "../../components";

const Upload = () => {
    // const { register, handleSubmit, errors } = useForm();


    const [genres, setGenre] = useState([]);
    // const getCategories = async () => {
    //  const result = await axios.get(`https://rewind-test.herokuapp.com/category/all`, {        
    //      })
        
    // }
    // getCategories();
    useEffect(() => {
        const getGenre = async () => {
            const result = await axios(`https://rewind-test.herokuapp.com/category/all`)
            console.log(result.data.message);

            setGenre(result.data.message);
        }
        getGenre();
    }, [])



    // const uploadMovie = async () => {
    //     const res = await axios.post(`https://rewind-test.herokuapp.com/movies/601c3732016ac50004bd8093/upload`),{
            
    //     }
    // }
    // const onSubmit = (e, data) => {


    //    alert('me');

    // const actualBtn = document.getElementById('customInput1');

    //     const fileChosen = document.getElementById('fileChosen');
    //     //    setFileInput(React.createRef())

    //     actualBtn.addEventListener('change', function () {
    //         fileChosen.textContent = this.files[0].name
    //         fileChosen.setAttribute("hidden");
    //         )}



    //     // })
    // };

    // const handleFileChange = (e) => {
    //     if (e.id === "customInput1") {
    //         const fileChosenTextValue = document.getElementById('fileChosen1');

    //         if (document.getElementById('customInput1').files[0]) {
    //             fileChosenTextValue.innerText = document.getElementById('customInput1').files[0].name
    //         }
    //         else {
    //             fileChosenTextValue.innerText = "No file chosen"
    //         }
    //     }
    //     else {
    //         const fileChosenTextValue = document.getElementById('fileChosen2');

    //         if (document.getElementById('customInput2').files[0]) {
    //             fileChosenTextValue.innerText = document.getElementById('customInput2').files[0].name
    //         }
    //         else {
    //             fileChosenTextValue.innerText = "No file chosen"
    //         }
    //     }
    // }

    const [title, setTitle] = useState("");
    const [coverpics_url, setCoverpics_url] = useState("");
    const [movie_url, setMovie_url] = useState("");
    const [description, setDescription] = useState("");
    const [cast, setCast] = useState("");
    const [release_date, setRelease_date] = useState("");
    const [category, setCategory] = useState("");

    const handleUpload = async (e) => {
        e.preventDefault();
        console.log(title, coverpics_url, movie_url, description, cast, release_date, category);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('coverpics_url', coverpics_url);
        formData.append('movie_url', movie_url);
        formData.append('description', description);
        formData.append('cast', cast);
        formData.append('release_date', release_date);
        formData.append('category', category);
        
        let result = await fetch(`https://rewind-test.herokuapp.com/movies/upload`,{
            method : 'POST',
            body : formData
        }) ;
        alert('updated');
        console.log(result);
    }







    return (
        <>
            <section className="practice">
                <aside>
                    <Side />
                </aside>
                <section>
                    <Navbar />
                    <main className="prac-main">
                        <section className="container-fluid prac-main-container">
                        <form className="upload-form">
                        <div><h4 className="header-title">Upload</h4></div>
                        <p className="upload-form-title"><b>Enter the movie details below</b></p>
            <div  className="upload-row">
                <div className="upload-column">
                <label for="title">Title</label>
                <input 
                type="text" 
                className="uploadform-inputs"
                name="title" 
                placeholder="Enter movie title"
                onChange={(e) => setTitle(e.target.value)}
                />
                 <label for="year">Year</label>
                <input 
                type="number" 
                className="uploadform-inputs"
                name="release_date" 
                placeholder="Enter movie year"
                onChange={(e) => setRelease_date(e.target.value)}
                />
                <label for="category">Genre</label>
                <select
                    id="selectCategory" 
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                    // value={genre.title}
                >
                    {genres.map(genre => (
                        <option key={genre._id} 
                        name="category" 
                        >
                            {genre.title}
                        </option>
                    ))}
                </select>
               <label for="cast">Cast</label>
                <input 
                type="text" 
                className="uploadform-inputs"
                name="cast" 
                placeholder="Enter names of cast members and separate with comma"
                onChange={(e) => setCast(e.target.value)}
                />
                 <label for="description">Description</label>
                <input 
                type="text"
                className="uploadform-inputs" 
                name="description" 
                placeholder="Enter a description of the movie"
                onChange={(e) => setDescription(e.target.value)}
                />
                {/* <input 
                type="text" 
                name="category" 
                placeholder="movie cast"
                onChange={(e) => setCategory(e.target.value)}
                /> */}
                </div>
                <div className="upload-column">
                <label className="customUpload">
                Choose Cover Image<br></br><br></br>
                <input 
                type="file" 
                name="coverpics_url" 
                className="file-upload"
                placeholder="Choose Cover Image"
                onChange={(e) => setCoverpics_url(e.target.files[0])}
                />
                </label>
                <label className="customUpload">
                Choose Movie<br></br><br></br>
                <input 
                type="file"
                name="movie_url"
                className="file-upload" 
                placeholder="Choose Movie"
                onChange={(e) => setMovie_url(e.target.files[0])}
                />
                </label>
                </div>
                </div>
                        <div className="Uploadbtn-container">
                <button className="uploadbtn" onClick={handleUpload}>Upload</button>
                </div>
            </form>
                                
                        </section>
                    </main>
                </section>
            </section>

        </>
    );
};


export { Upload };