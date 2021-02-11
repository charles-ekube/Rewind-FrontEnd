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
                        <form>
                <input 
                type="text" 
                name="title" 
                placeholder="movie title"
                onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                type="file" 
                name="coverpics_url" 
                placeholder="cover image"
                onChange={(e) => setCoverpics_url(e.target.files[0])}
                />
                <input 
                type="file" 
                name="movie_url" 
                placeholder="movie"
                onChange={(e) => setMovie_url(e.target.files[0])}
                />
                <input 
                type="text" 
                name="description" 
                placeholder="movie description"
                onChange={(e) => setDescription(e.target.value)}
                />
                <input 
                type="text" 
                name="cast" 
                placeholder="movie cast"
                onChange={(e) => setCast(e.target.value)}
                />
                <input 
                type="number" 
                name="release_date" 
                placeholder="movie year"
                onChange={(e) => setRelease_date(e.target.value)}
                />
                {/* <input 
                type="text" 
                name="category" 
                placeholder="movie cast"
                onChange={(e) => setCategory(e.target.value)}
                /> */}
                <select 
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
                <button onClick={handleUpload}>Upload</button>
            </form>
                                
                        </section>
                    </main>
                </section>
            </section>

        </>
    );
};


export { Upload };
