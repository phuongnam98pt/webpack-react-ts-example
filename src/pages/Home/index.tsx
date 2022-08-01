import * as React from "react";
import TutorialDataService from "model/services/TutorialService";
// import { Link } from "react-router-dom";
// import ITutorialData from '../types/Tutorial';
function Home() {
    const retrieveTutorials = () => {
        TutorialDataService.getAll()
            .then((response: any) => {
                // setTutorials(response.data);
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };
    retrieveTutorials();
    return <h2>Home page</h2>;
}

export default Home;
