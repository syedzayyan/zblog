import BlogLists from "../../components/Blog/BlogList"
import HeadTag, {picURL} from "../../components/HeadTag"
import {createClient} from "contentful"

export async function getStaticProps(context) {
  const client = createClient({
    space:process.env.CONTENTFUL_SPACE,
    accessToken:process.env.CONTENTFUL_API_KEY
  });
  const res = await client.getEntries({content_type : "title"})
    return {
      props: {posts : res.items}, // will be passed to the page component as props
      revalidate: 180
    }
  }
  

export default function Blog({ posts }){
    return (
      <>
          <HeadTag title = "Syed Zayyan Masud's Blog" 
          desc = "Projects I made :)"
          imgURL = {picURL}
        />
        <BlogLists data = {posts} />
        </>
    )
}