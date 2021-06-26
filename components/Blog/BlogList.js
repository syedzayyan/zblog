import timeformatter from "../../timeformatter"
import Card from "../Card"

export default function BlogLists({ data }) {
    console.log(data)
    return (
        <div>
            <h1>Blog</h1>
            {data.map((datum, ind) =>
                <a className="card-links" key={ind} href={`/blog/${datum.fields.slug}`}>
                    <Card img_url = {"https:" + datum.fields.titleImage.fields.file.url}>
                    <h2>{datum.fields.title}</h2><br></br>
                            <span>{datum.fields.tag}</span><br></br>
                            <span>{timeformatter(datum.fields.date)}</span>
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