import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
const renderOptions = {
    renderNode: {
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        // target the contentType of the EMBEDDED_ENTRY to display as you need
        if (node.data.target.sys.contentType.sys.id === "blogPost") {
          return (
            <a href={`/blog/${node.data.target.fields.slug}`}>            {node.data.target.fields.title}
            </a>
          );
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        // target the contentType of the EMBEDDED_ENTRY to display as you need
        if (node.data.target.sys.contentType.sys.id === "codeBlock") {
          return (
            <pre>
              <code>{node.data.target.fields.code}</code>
            </pre>
          );
        }
  
        if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
          return (
            <iframe
              src={node.data.target.fields.embedUrl}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={node.data.target.fields.title}
              allowFullScreen={true}
            />
          );
        }
      },
  
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        // render the EMBEDDED_ASSET as you need
        return (
          <img
            src={`https://${node.data.target.fields.file.url}`}
            width="80%"
            alt={node.data.target.fields.description}
          />
        );
      },
    },
  };
export default function BlogDetail({ data }) {
    console.log(data)
    return (
        <div>
            <div>
                <h1>{data.fields.title}</h1>
                {data.HEADER_IMAGE === "" ? (null) : (
                    <div className="div-image-border">
                        <img src={"https:" + data.fields.titleImage.fields.file.url} className="div-image-border" style = {{maxWidth:"80%"}} />
                    </div>
                )}
                <div>
                    {documentToReactComponents(data.fields.content, renderOptions)}
                </div>
            </div>
        </div>
    )
}