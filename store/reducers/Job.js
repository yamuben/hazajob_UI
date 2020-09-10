import JOBS from '../../data/job-data';

const initialState = {
    availableJobs: JOBS,
    userJobsDisplay: JOBS.filter(job => job.jobCategory === 'IT'),
    
};

export default (state = initialState, action) => {
    return state;
};