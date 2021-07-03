import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import timeformatter from "../../timeformatter"
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import BlogNewsletter from "./BlogNewsletter"

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <Image
          width={node.data?.target?.fields?.file?.details.image.width}
          height={node.data?.target?.fields?.file?.details.image.height}
          src={"https:" +  node.data?.target?.fields?.file?.url}
          alt={node.data?.target?.fields?.title}
        />
    ),
  },
};

export default function BlogDetail({ data }) {
    return (
        <div>
            <div>
                <h1>{data.fields.title}</h1>
                <span>{timeformatter(data.sys.createdAt)}</span><br />  
                        <Image height = {data.fields.titleImage.fields.file.details.image.height}
                          width = {data.fields.titleImage.fields.file.details.image.width}
                         src={"https:" + data.fields.titleImage.fields.file.url} className="div-image-border" />
                <div style = {{minHeight : "100vh", width : "100%"}}>
                    {documentToReactComponents(data.fields.content, renderOptions)}
                </div>
                <span style = {{textDecoration : "underline"}}>{data.fields.tag}</span><br /><br />
                <BlogNewsletter />
            </div>
        </div>
    )
}