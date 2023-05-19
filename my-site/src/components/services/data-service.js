import RequestService from "./request-service";

// process.env.NODE_ENV
// console.log('process.env.REACT_APP_MY_ENV', process.env.REACT_APP_MY_ENV);

const DataService = (token) => {

    const baseUrl = process.env.REACT_APP_BACKEND_URL;
    const username = process.env.REACT_APP_BACKEND_USERNAME;
    const password = process.env.REACT_APP_BACKEND_PASSWORD;

    const { get, post, postWithoutAuth } = RequestService();

    const getToken = async () => {
        const authBody = {
            username: username,
            password: password
        };
        return await postWithoutAuth(baseUrl + '/login', JSON.stringify(authBody, null, 2));
    }

    const getSkills = () => {

        return token.then(t => {
            return get(baseUrl + '/skills', t);
        });
    }

    const getExperience = () => {

        return token.then(t => {
            return get(baseUrl + '/experience', t);
        });
    }

    const getProjects = () => {
        
        return token.then(t => {
            return get(baseUrl + '/projects', t);
        });
    }

    const postEmail = body => {

        return token.then(t => {
            return post(baseUrl + '/email', t, body);
        });
    }

    return { getToken, getSkills, getExperience, getProjects, postEmail };
}

export default DataService;