import apiservices from "./apiservice";

// Add resume API
export const addResumeAPI = async (reqBody) => {
    return await apiservices("POST", "/allResumes", reqBody);
};

// Get resume API called by view component
export const getResumeAPI = async (id) => {
    return await apiservices("GET", `/allResumes/${id}`, {});
};
// edit resume API called by edit component
export const editResumeAPI = async (resumeId,reqBody) => {
    return await apiservices("PUT", `/allResumes/${resumeId}`,reqBody);
    //to identify the resume to be edited so id is passed yo server
};


// Add history api call by view component
export const addHistoryAPI = async (reqBody) => {
    return await apiservices("POST", "/history", reqBody);
};
// Get resume API called by history component
// export const getHistoryAPI = async (id) => {
//     return await apiservices("GET", `/allResumes/${id}`, {});
// };
export const getHistoryAPI = async () => {
    return await apiservices("GET", "/history", {});
};
// edit resume API called by edit component
export const dltResumeAPI = async (resumeId) => {
    return await apiservices("DELETE", `/history/${resumeId}`,);
    //to identify the resume to be edited so id is passed yo server
};