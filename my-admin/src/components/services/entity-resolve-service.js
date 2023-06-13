import DataService from './data-service';

const resolveEntityList = () => {

    return [
        'users',
        'skills',
        'projects',
        'experience',
        'courses',
        'emails' 
    ];
}

const resolveEntityTemplate = (entityName = null) => {

    const user = {
        id: '',
        username: '',
        email: '',
        password: ''
    };

    const skill = {
        id: '',
        name: '',
        percent: ''
    };

    const experience = {
        id: '',
        start: '',
        end: '',
        position: '',
        organization: '',
        description: ''
    };

    const project = {
        id: '',
        start: '',
        end: '',
        industry: '',
        description: '',
        role: '',
        technologies: '',
        resposibilities: ''
    };

    const course = {
        id: '',
        name: '',
        year: ''
    };

    const email = {
        id: '',
        address: '',
        message: '',
        date: ''
    };

    const entityMap = { 
        users: user, 
        skills: skill, 
        experience: experience, 
        projects: project, 
        courses: course, 
        emails: email 
    };

    if (entityName) {
        return entityMap[entityName];
    } else {
        return entityMap;
    }
}

const resolveEntityGetMethod = (token, entityName = null) => {

    const {getUsers, getSkills, getProjects, getExperience, getCourses, getEmails} = DataService(token);

    const entityMap = {
        users: getUsers,
        skills: getSkills,
        projects: getProjects,
        experience: getExperience,
        courses: getCourses,
        emails: getEmails
    }

    if (entityName) {
        return entityMap[entityName];
    } else {
        return entityMap;
    }
}

export { resolveEntityList, resolveEntityTemplate, resolveEntityGetMethod };