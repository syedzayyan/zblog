import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import timeformatter from "../../timeformatter"
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";

const renderOptions = {
    renderNode: {
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        // target the contentType of the EMBEDDED_ENTRY to display as you need
        if (node.data.target.sys.contentType.sys.id === "blogPost") {
          return (
            <a href={`/blog/${node.data.target.fields.slug}`}>        
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
            width = "60%"
              src={`https://${node.data.target.fields.file.url}`}
              alt={node.data.target.fields.description}
            />
        );
      },
    },
  };
export default function BlogDetail({ data }) {
    return (
        <div>
            <div>
                <h1>{data.fields.title}</h1>
                <span>{timeformatter(data.sys.createdAt)}</span><br /><br />     
                    <div style = {{position:"relative", width : "80vw", height : "80vh"}}>
                        <Image objectFit="contain" layout = "fill" src={"https:" + data.fields.titleImage.fields.file.url} className="div-image-border" />
                    </div>
                
                <div>
                    {documentToReactComponents(data.fields.content, renderOptions)}
                </div>
                <span style = {{textDecoration : "underline"}}>{data.fields.tag}</span><br />
            </div>
        </div>
    )
}