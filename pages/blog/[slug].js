import BlogDetails from "../../components/Blog/BlogDetail";
import db from "../../db"
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

var params = {
    TableName: serverRuntimeConfig.tableName,
    Select: "ALL_ATTRIBUTES"
};

export const getStaticPaths = async () => {
    const { Items } = await await db.scan(params)
    const info = Items

    const paths = info.map((datum, ind) => {
        if (datum.STATUS === "0"){
            delete info[ind]
        }
      return {
        params: { slug: datum.POST_ID }
      }
    })
    
    return {
      paths,
      fallback: `blocking`,
    }
  }
  export const getStaticProps = async (context) => {
    const slug = context.params.slug;
    const { Items } = await await db.scan(params)
    const cleanRes = Items
    var paths 
    cleanRes.map((datum, ind) => {
      if (datum.POST_ID === slug){
          paths =  cleanRes[ind]
      }
    })
    return {
      props: { data: paths },
      revalidate: 60
    }
}

export default function BlogDetailHigh({data}){
    return (
        <BlogDetails data = {data} />
    )
}

