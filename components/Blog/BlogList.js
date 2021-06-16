import timeformatter from "../../timeformatter"
import Card from "../Card"

export default function BlogLists({ data }) {
    return (
        <div>
            <h1>Blog</h1>
            {data.map((datum, ind) =>
                <a className="card-links" key={ind} href={`/blog/${datum.POST_ID}`}>
                    <Card img_url = {datum.HEADER_IMAGE}>
                    <h1>{datum.TITLE}</h1><br></br>
                            <span>{datum.TAG}</span><br></br>
                            <span>{timeformatter(datum.CREATED_AT)}</span>
                    </Card>
                </a>
            )}
            <style>
                {`
                .div-image-border{
                    width:20%;
                }
                .image{
                    width:100%
                }
            `}
            </style>
        </div>
    )
}