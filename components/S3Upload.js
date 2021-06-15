import { useEffect, useState } from "react";
import Modal from "./Modal";
import { server } from "../config/serverURL"

export default function S3Upload() {
    const [loaded, setLoaded] = useState([])
    useEffect(() => {
        async function llload(){
            const res = await fetch(server + "/api/s3_get")
            const data = await res.json();
            setLoaded(data)
        }
        llload();
    },[])
    const uploadPhoto = async (e) => {
        const file = e.target.files[0];
        const filename = encodeURIComponent(file.name);
        const res = await fetch(`/api/s3?file=${filename}`);
        const { url, fields } = await res.json();
        const formData = new FormData();

        Object.entries({ ...fields, file }).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const upload = await fetch(url, {
            method: 'POST',
            body: formData,
        });
        upload.then(window.location.reload())
    };
    return (
        <Modal buttonText="Files">
            <input
                onChange={uploadPhoto}
                type="file"
                accept="image/*"
            />
            <table>
            <tr>
                        <th>File Name</th>
                        <th>File URL</th>
                    </tr>
            {loaded.map((datum, index) => 
                <tr key = {index}>
                    <td>{datum.filename}</td>
                    <td><a href = {datum.fileURL} target = "_blank">Open</a></td>
                </tr>
            )}
            </table>
        </Modal>
    )
}