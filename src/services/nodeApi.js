import axios from 'axios'

export const postVideo = async (userId, videoData, onProgress) => {
    try {
        const config = {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: onProgress,
          };
        const response = await axios.post(`https://videoshareapp.onrender.com/video/${userId}`, videoData, config)
        return response
    } catch (err) {
        return err.message
    }
}

export const searchByTitle = async (query) => {
    try {
        const response = await axios.get(`https://videoshareapp.onrender.com/video/search?q=${query}`)
        return response.data.result
    } catch (err) {
        return err.message
    }
}

export const getById = async (videoId) => {
    try {
        const response = await axios.get(`https://videoshareapp.onrender.com/searchlist/video/${videoId}`)
        return response.data.result
    } catch (err) {
        return err.message
    }
}

export const updateVideo = async (userId, videoId, videoData) => {
    try {
        const response = await axios
                            .put(`https://videoshareapp.onrender.com/video/${userId}/${videoId}`, videoData)
        return response.data.result
    } catch (err) {
        return err.message
    }
}

export const deleteVideo = async (userId, videoId) => {
    try {
        const response = await axios.delete(`https://videoshareapp.onrender.com/video/${userId}/${videoId}`)
        return response.data.result
    } catch (err) {
        return err.message
    }
}

export const getAllVideos = async () => {
    try {
        const response = await axios.get(`https://videoshareapp.onrender.com/video`)
        return response.data
    } catch (err) {
        return err.message
    }
}