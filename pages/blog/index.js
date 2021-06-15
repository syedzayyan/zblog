import { server } from '../../config/serverURL';
import BlogLists from "../../components/Blog/BlogList"

export async function getStaticProps(context) {
    const postListRes = await fetch(server + "/api/get_blog")
    const postListData = await postListRes.json()
    function findAndRemove(array, property, value) {
        array.forEach(function(result, index) {
          if(result[property] === value) {
            //Remove from array
            array.splice(index, 1);
          }    
        });
    }
    findAndRemove(postListData, 'STATUS', '0');
    return {
      props: {postListData}, // will be passed to the page component as props
      revalidate: 60
    }
  }
  

export default function Blog({postListData}){
    return (
        <BlogLists data = {postListData} />
    )
}