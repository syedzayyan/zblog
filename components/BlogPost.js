import BlogPostModal from "./BlogPostModal";
import S3Upload from "./S3Upload"

export default function BlogPost(props) {
    return (
        <div className = "container">
            <a href = "/api/logout">Logout</a><br></br>
            <S3Upload />
            <h1>{props.user.email}</h1><br></br>
            <BlogPostModal title = "" slug = "" markdown = "" 
                tags = "" status = "" headerImage = "" desc = "" mailedStatus = "" btnText = "New Post"/>
            <style>
            {`
            .container{
                width:90vw;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
            }
            `}
            </style>
        </div>
    )
}