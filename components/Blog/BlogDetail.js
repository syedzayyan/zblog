import * as Showdown from "showdown";
const converter = new Showdown.Converter();


function createMarkup(htmlText) {
    return {__html: htmlText};
  }



export default function BlogDetail({data}){
    return(
        <div>
            <div>
                <h1>{data.TITLE}</h1>
                <div>
                    <div dangerouslySetInnerHTML={createMarkup(converter.makeHtml(data.CONTENT))} />
                </div>
            </div>
        </div>
    )
}