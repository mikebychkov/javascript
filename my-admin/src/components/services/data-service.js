import RequestService from "./request-service";

// process.env.NODE_ENV
// console.log('process.env.REACT_APP_MY_ENV', process.env.REACT_APP_MY_ENV);

const DataService = (tokenValue) => {

    const baseUrl = process.env.REACT_APP_BACKEND_URL;

    const token = new Promise(r => r(tokenValue));

    const { getRequest, postRequest, deleteRequest, postWithoutAuth } = RequestService();

    const getToken = async (username, password) => {
        const authBody = {
            username: username,
            password: password
        };
        return await postWithoutAuth(baseUrl + '/login', JSON.stringify(authBody, null, 2));
    }

    const setIdNullIfEmpty = json => {

        const body = JSON.parse(json);
        if (!body.id) {
            body.id = null;
        }
        return JSON.stringify(body, null, 2);
    }


    // SKILLS

    const getSkills = () => {

        return token.then(t => {
            return getRequest(baseUrl + '/skills', t);
        });
    }

    const postSkill = body => {

        const requestBody = setIdNullIfEmpty(body);

        return token.then(t => {
            return postRequest(baseUrl + '/skills', t, requestBody);
        });
    }

    const deleteSkills = ids => {

        return token.then(t => {
            return deleteRequest(baseUrl + '/skills', t, ids);
        });
    }


    // EXPERIENCE

    const getExperience = () => {

        return token.then(t => {
            return getRequest(baseUrl + '/experience', t)
                .then(json => {
                    return json.map(r => {
                        r.start = r.start.slice(0,4);
                        r.end = r.end.slice(0,4);
                        return r;
                    })
                });
        });
    }

    const postExperience = body => {

        const requestBody = JSON.parse(setIdNullIfEmpty(body));
        requestBody.start += '-01-01';
        requestBody.end += '-01-01';

        return token.then(t => {
            return postRequest(baseUrl + '/experience', t, JSON.stringify(requestBody, null, 2));
        });        
    }

    const deleteExperience = ids => {

        return token.then(t => {
            return deleteRequest(baseUrl + '/experience', t, ids);
        });
    }


    // PROJECTS

    const getProjects = () => {
        
        return token.then(t => {
            return getRequest(baseUrl + '/projects', t)
            .then(json => {
                return json.map(r => {
                    r.start = r.start.slice(0,4);
                    r.end = r.end.slice(0,4);
                    return r;
                })
            });
        });
    }

    const postProject = body => {

        const requestBody = JSON.parse(setIdNullIfEmpty(body));
        requestBody.start += '-01-01';
        requestBody.end += '-01-01';

        return token.then(t => {
            return postRequest(baseUrl + '/projects', t, JSON.stringify(requestBody, null, 2));
        });
    }

    const deleteProjects = ids => {

        return token.then(t => {
            return deleteRequest(baseUrl + '/projects', t, ids);
        });
    }


    // COURSES

    const getCourses = () => {
        
        return token.then(t => {
            return getRequest(baseUrl + '/courses', t);
        });
    }

    const postCourse = body => {
        
        const requestBody = setIdNullIfEmpty(body);

        return token.then(t => {
            return postRequest(baseUrl + '/courses', t, requestBody);
        });
    }

    const deleteCourses = ids => {

        return token.then(t => {
            return deleteRequest(baseUrl + '/courses', t, ids);
        });
    }


    // EMAILS

    const getEmails = () => {

        return token.then(t => {
            return getRequest(baseUrl + '/email', t);
        });
    }

    const postEmail = body => {

        const requestBody = setIdNullIfEmpty(body);

        return token.then(t => {
            return postRequest(baseUrl + '/email', t, requestBody);
        });
    }

    const deleteEmails = ids => {

        return token.then(t => {
            return deleteRequest(baseUrl + '/email', t, ids);
        });
    }


    // USERS 

    const getUsers = () => {

        return token.then(t => {
            return getRequest(baseUrl + '/users', t);
        });
    }

    const postUser = body => {

        const requestBody = setIdNullIfEmpty(body);

        return token.then(t => {
            return postRequest(baseUrl + '/users', t, requestBody);
        });
    }

    const deleteUsers = ids => {

        return token.then(t => {
            return deleteRequest(baseUrl + '/users', t, ids);
        });
    }


    // VISITS

    const getVisits = () => {

        return token.then(t => {
            return getRequest(baseUrl + '/visits', t);
        });
    }

    const postVisit = body => {

        const requestBody = setIdNullIfEmpty(body);

        return token.then(t => {
            return postRequest(baseUrl + '/visits', t, requestBody);
        });
    }

    const deleteVisits = ids => {

        return token.then(t => {
            return deleteRequest(baseUrl + '/visits', t, ids);
        });
    }


    return { 
        getToken, 
        getSkills, getExperience, getProjects, getCourses, getEmails, getUsers, getVisits,
        postSkill, postExperience, postProject, postCourse, postEmail, postUser, postVisit,
        deleteSkills, deleteExperience, deleteProjects, deleteCourses, deleteEmails, deleteUsers, deleteVisits,
    };
}

export default DataService;