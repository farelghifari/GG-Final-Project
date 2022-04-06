import react, { useEffect, useState } from "react";
import {Container} from 'react-bootstrap';
import sylesheets from './index.css'

/*"https://accounts.spotify.com/authorize?client_id=f95785e7487b491b88e8209b3dc974c4&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"*/

const CLIENT_ID = "f95785e7487b491b88e8209b3dc974c4";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000";
const SPACE_DELIMITER = "%20";
const SCOPES = ["streaming", "user-read-email", "user-read-private", "user-library-read", "user-library-modify", "user-read-playback-state", "user-modify-playback-state"];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

/*http://localhost:3000/#access_token=BQBy26cBfH2Z5W_5NJ28Gbfk5EV0cFegSP5sCybS25OMgN899nucploWHFHMSiCXTzoffeHjgzxwaKCgzPldynL7lwNGVEd0TPa0cSI21XJUyTMPSJ8tylZp76POZUYVhnK8bgE__ZgIHwQaNHN9k6tGdB9j1Usigd7iHenW5svoD7P-j5lxOOYzIEWjtXpoPaNE_hS8ldsGqjH8ca6NdxsvoDGwEtB20Q&token_type=Bearer&expires_in=3600*/

const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHastag = hash.substring(1);
    const paramsInUrl = stringAfterHastag.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
        const [key, value] = currentValue.split("=");
        accumulater[key] = value;
        return accumulater;
    }, {});

    return paramsSplitUp;
}

export default function Login() {
    const [isAuthorize, setIsAuthorized] = useState(true);
    useEffect(() => {
        if(window.location.hash) {
            const {
                access_token,
                expires_in,
                token_type,
            } = getReturnedParamsFromSpotifyAuth(window.location.hash)
            
            localStorage.clear();
            
            localStorage.setItem("accessToken", access_token);
            localStorage.setItem("tokentype", token_type);
            localStorage.setItem("expiresIn", expires_in);
        }
    })
    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}`;
    }
    
    return (
        <>
            {isAuthorize && (
                <main className="center">
                    <p className="text">Login for next step</p>
                    <Container className="d-flex justify-content-center align-items-center">
                        <a className="btn btn-success btn-lg" onClick={handleLogin}>Login With Spotify</a>
                    </Container>
                </main>
            )} 
            {isAuthorize && (
                <main className="container" id="home">
                <CreatePlaylistForm
                    accessToken={window.location.hash.access_token}
                    userId={CLIENT_ID}
                    uriTracks={REDIRECT_URL_AFTER_LOGIN}
                />

                <hr />
                </main>
            )}
        </>
    )
    
    
    /*<Container className="d-flex justify-content-center align-items-center" 
    style={{ minHeight: "100vh" }}>
        <a className="btn btn-success btn-lg" onClick={handleLogin}>LOGIN WITH SPOTIFY</a>
    </Container>*/
}