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


    // SKILLS

    const getSkills = () => {

        return token.then(t => {
            return getRequest(baseUrl + '/skills', t);
        });
    }

    const postSkill = body => {

        return token.then(t => {
            return postRequest(baseUrl + '/skills', t, body);
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

        const requestBody = JSON.parse(body);
        requestBody.start += '0101';
        requestBody.end += '0101';

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

        const requestBody = JSON.parse(body);
        requestBody.start += '0101';
        requestBody.end += '0101';

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
        
        return token.then(t => {
            return postRequest(baseUrl + '/courses', t, body);
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

        return token.then(t => {
            return postRequest(baseUrl + '/email', t, body);
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

        return token.then(t => {
            return postRequest(baseUrl + '/users', t, body);
        });
    }

    const deleteUsers = ids => {

        return token.then(t => {
            return deleteRequest(baseUrl + '/users', t, ids);
        });
    }


    return { 
        getToken, 
        getSkills, getExperience, getProjects, getCourses, getEmails, getUsers,
        postSkill, postExperience, postProject, postCourse, postEmail, postUser,
        deleteSkills, deleteExperience, deleteProjects, deleteCourses, deleteEmails, deleteUsers
    };
}

export default DataService;