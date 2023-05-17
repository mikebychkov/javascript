
const DataService = () => {

    const getSkills = () => {

        console.log('requesting skills');

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(
                    [
                        {id: 1, name: 'Java SE/EE', percent: 90},
                        {id: 2, name: 'Spring Framework', percent: 85},
                        {id: 3, name: 'K8s', percent: 67},
                        {id: 4, name: 'Docker', percent: 97},
                        {id: 5, name: 'MSSQL Server', percent: 97},
                        {id: 6, name: 'PostgreSQL', percent: 77},
                        {id: 7, name: 'MongoDB', percent: 57},
                        {id: 8, name: 'Java Script', percent: 63},
                        {id: 9, name: 'React', percent: 60},
                        {id: 10, name: 'CSS', percent: 47},
                        {id: 11, name: 'Nginx', percent: 85},
                    ]
                );
            }, 2000);
        });
    }

    const getExperience = () => {

        console.log('requesting experience');

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(
                    [
                        {
                            id: 1,
                            start: 2020,
                            end: 2023,
                            posittion: 'Senior Java Developer',
                            organization: 'OOO Endpoint',
                            description: 'The following example creates a stacked form with two input fields, one checkbox, and a submit button.'
                        },
                        {
                            id: 2,
                            start: 2020,
                            end: 2023,
                            posittion: 'Senior Java Developer',
                            organization: 'OOO Endpoint',
                            description: 'The following example creates a stacked form with two input fields, one checkbox, and a submit button.'
                        },
                        {
                            id: 3,
                            start: 2020,
                            end: 2023,
                            posittion: 'Senior Java Developer',
                            organization: 'OOO Endpoint',
                            description: 'The following example creates a stacked form with two input fields, one checkbox, and a submit button.'
                        },
                        {
                            id: 4,
                            start: 2020,
                            end: 2023,
                            posittion: 'Senior Java Developer',
                            organization: 'OOO Endpoint',
                            description: 'The following example creates a stacked form with two input fields, one checkbox, and a submit button.'
                        },
                        {
                            id: 5,
                            start: 2020,
                            end: 2023,
                            posittion: 'Senior Java Developer',
                            organization: 'OOO Endpoint',
                            description: 'The following example creates a stacked form with two input fields, one checkbox, and a submit button.'
                        },
                    ]
                );
            }, 2000);
        });
    }

    const getProjects = () => {
        
        console.log('requesting projects');

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(
                    [
                        {
                            id: 1,
                            start: 2020,
                            end: 2023,
                            posittion: 'Senior Java Developer',
                            organization: 'OOO Endpoint',
                            description: 'The following example creates a stacked form with two input fields, one checkbox, and a submit button.'
                        },
                        {
                            id: 2,
                            start: 2020,
                            end: 2023,
                            posittion: 'Senior Java Developer',
                            organization: 'OOO Endpoint',
                            description: 'The following example creates a stacked form with two input fields, one checkbox, and a submit button.'
                        },
                        {
                            id: 3,
                            start: 2020,
                            end: 2023,
                            posittion: 'Senior Java Developer',
                            organization: 'OOO Endpoint',
                            description: 'The following example creates a stacked form with two input fields, one checkbox, and a submit button.'
                        },
                        {
                            id: 4,
                            start: 2020,
                            end: 2023,
                            posittion: 'Senior Java Developer',
                            organization: 'OOO Endpoint',
                            description: 'The following example creates a stacked form with two input fields, one checkbox, and a submit button.'
                        },
                        {
                            id: 5,
                            start: 2020,
                            end: 2023,
                            posittion: 'Senior Java Developer',
                            organization: 'OOO Endpoint',
                            description: 'The following example creates a stacked form with two input fields, one checkbox, and a submit button.'
                        },
                        {
                            id: 6,
                            start: 2020,
                            end: 2023,
                            posittion: 'Senior Java Developer',
                            organization: 'OOO Endpoint',
                            description: 'The following example creates a stacked form with two input fields, one checkbox, and a submit button.'
                        },
                        {
                            id: 7,
                            start: 2020,
                            end: 2023,
                            posittion: 'Senior Java Developer',
                            organization: 'OOO Endpoint',
                            description: 'The following example creates a stacked form with two input fields, one checkbox, and a submit button.'
                        },
                    ]
                );
            }, 2000);
        });
    }

    return { getSkills, getExperience, getProjects };
}

export default DataService;