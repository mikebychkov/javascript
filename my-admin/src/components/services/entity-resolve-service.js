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
        ip: '',
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

const resolveEntityRequestMethod = (token, entityName = null) => {

    const ds = DataService(token);

    const entityMap = {
        users: {get: ds.getUsers, post: ds.postUser, del: ds.deleteUsers},
        skills: {get: ds.getSkills, post: ds.postSkill, del: ds.deleteSkills},
        projects: {get: ds.getProjects, post: ds.postProject, del: ds.deleteProjects},
        experience: {get: ds.getExperience, post: ds.postExperience, del: ds.deleteExperience},
        courses: {get: ds.getCourses, post: ds.postCourse, del: ds.deleteCourses},
        emails: {get: ds.getEmails, post: ds.postEmail, del: ds.deleteEmails}
    }

    if (entityName) {
        return entityMap[entityName];
    } else {
        return entityMap;
    }
}



export { resolveEntityList, resolveEntityTemplate, resolveEntityRequestMethod };