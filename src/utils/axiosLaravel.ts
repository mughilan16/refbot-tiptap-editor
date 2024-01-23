import axios from "axios"

export const ec2InstanceUrl = ({ port = '' }: { port: string | number }) => `http://ec2-100-21-24-56.us-west-2.compute.amazonaws.com${port ? `:${port}` : ""}`;
export const backendUrl = `${ec2InstanceUrl({ port: '8080' })}/antares-backend/public` as const
export const apiURL = `${backendUrl}/api` as const;
const axiosLaravel = axios.create({
    baseURL: apiURL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer 17|kCbWP7B6ebKNDvaRkWAJy6mzaYxI2hvveL8yBxAo',
    },
})


export default axiosLaravel