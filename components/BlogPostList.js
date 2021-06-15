import BlogPostModal from "./BlogPostModal";
import Modal from "./Modal"

async function trashAPI(id){
    const response = await fetch("/api/delete_blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });
  
      if (response.ok) {
        window.location.reload()
      }
}

export default function BlogPostList({data}){
    return (
        <table>
            <tr>
                <th>POST_ID</th>
                <th>TITLE</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>MAILED_STATUS</th>
                <th>STATUS</th>
                <th>TAG</th>
                <th>CREATED_AT</th>
            </tr>
            {data.map((datum, key) => 
                <tr key = {key}>
                    <td>{datum.POST_ID}</td>
                    <td>{datum.TITLE}</td>
                    <td>
                    <BlogPostModal title = {datum.TITLE} slug = {datum.POST_ID} markdown = {datum.CONTENT} 
                        tags = {datum.TAG} status = {datum.MAILED_STATUS} 
                        headerImage = "" desc = {datum.DESC}  mailedStatus = {datum.MAILED_STATUS} 
                        btnText = "Edit Post"/>
                    </td>
                    <td><Modal buttonText = "Delete" warning>
                            <button onClick = {() => {trashAPI(datum.POST_ID)}} className = "btn btn-danger">
                                Delete
                            </button>
                        </Modal>
                    </td>
                    <td>{datum.MAILED_STATUS}</td>
                    <td>{datum.STATUS}</td>
                    <td>{datum.TAG}</td>
                    <td>{datum.CREATED_AT}</td>
                </tr>
            )}
            <style>
            {`
                    table {
                        color:var(--bg-primary);
                        background: white;
                        border: 1px solid #e4e5e7;
                        border-collapse: collapse;
                        width: 100%;
                    }
                    td,
                    th {
                        text-align: left;
                        padding: 9px 18px;
                    }
                    th:last-child,
                    td:last-child {
                        color: #6a6c6f;
                    }
                    tr {
                        border-bottom: 1px solid #e4e5e7;
                    }
                    tr:nth-child(2n) {
                        background-color: #f7f9fa;
                    }
            `}
            </style>
        </table>
    )
}