import RequestService from "./request-service";

// process.env.NODE_ENV
// console.log('process.env.REACT_APP_MY_ENV', process.env.REACT_APP_MY_ENV);

const DataService = (tokenValue) => {

    const baseUrl = process.env.REACT_APP_BACKEND_URL;
    const username = process.env.REACT_APP_BACKEND_USERNAME;
    const password = process.env.REACT_APP_BACKEND_PASSWORD;

    const token = new Promise(r => r(tokenValue));

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
            return get(baseUrl + '/experience', t)
                .then(json => {
                    return json.map(r => {
                        r.start = r.start.slice(0,4);
                        r.end = r.end.slice(0,4);
                        return r;
                    })
                });
        });
    }

    const getProjects = () => {
        
        return token.then(t => {
            return get(baseUrl + '/projects', t)
            .then(json => {
                return json.map(r => {
                    r.start = r.start.slice(0,4);
                    r.end = r.end.slice(0,4);
                    return r;
                })
            });
        });
    }

    const getCourses = () => {
        
        return token.then(t => {
            return get(baseUrl + '/courses', t);
        });
    }

    const postEmail = body => {

        return token.then(t => {
            return post(baseUrl + '/email', t, body);
        });
    }

    const postVisit = ip => {

        const body = {
            ip: ip
        }

        return token.then(t => {
            return post(baseUrl + '/visits', t, JSON.stringify(body));
        });
    }

    return { getToken, getSkills, getExperience, getProjects, getCourses, postEmail, postVisit };
}

export default DataService;