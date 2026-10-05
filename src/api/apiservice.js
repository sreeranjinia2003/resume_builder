import axiosinstance from "./axiosintances"


// a common fun to do api call is defined

const apiservices = async (httpmethod, url, reqbody) => {
    const reqConfig = {
        method: httpmethod,
        url,
        data: reqbody
    }
    try {
        const result = await axiosinstance(reqConfig)
        return result
    }
    catch (err) {
        return err

    }

}
export default apiservices