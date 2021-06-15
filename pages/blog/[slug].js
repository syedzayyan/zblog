import { server } from '../../config/serverURL';
import BlogDetails from "../../components/Blog/BlogDetail";

export const getStaticPaths = async () => {
    const res = await fetch(server + "/api/get_blog")
    const info = await res.json()

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
    const res = await fetch(server + "/api/get_blog")
    const cleanRes = await res.json()
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

