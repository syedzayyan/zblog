import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import timeformatter from "../../timeformatter"
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <div style = {{position:"relative", width : "60vw", height : "60vh", margin : "0 auto"}}>
      <Image
        objectFit = "contain"
        layout = "fill"
        src={"https:" +  node.data?.target?.fields?.file?.url}
        alt={node.data?.target?.fields?.title}
      />
      </div>
    ),
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