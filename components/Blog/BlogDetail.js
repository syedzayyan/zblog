import * as Showdown from "showdown";
const converter = new Showdown.Converter();

function createMarkup(htmlText) {
    return { __html: htmlText };
}



export default function BlogDetail({ data }) {
    return (
        <div>
            <div>
                <h1>{data.TITLE}</h1>
                {data.HEADER_IMAGE === "" ? (null) : (
                    <div className="div-image-border">
                        <img src={data.HEADER_IMAGE} className="div-image-border" style = {{maxWidth:"80%"}} />
                    </div>
                )}
                <div>
                    <div dangerouslySetInnerHTML={createMarkup(converter.makeHtml(data.CONTENT))} />
                </div>
            </div>
        </div>
    )
}