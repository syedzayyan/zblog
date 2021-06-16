import BlogLists from "../../components/Blog/BlogList"
import db from "../../db"
import getConfig from 'next/config'
import HeadTag from "../../components/HeadTag"

const { serverRuntimeConfig } = getConfig()

var params = {
    TableName: serverRuntimeConfig.tableName,
    Select: "ALL_ATTRIBUTES"
};

export async function getStaticProps(context) {
    const { Items } = await await db.scan(params)
    const postListData = Items
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
      revalidate: 180
    }
  }
  

export default function Blog({postListData}){
    return (
      <>
          <HeadTag title = "Syed Zayyan Masud's Blog" 
          desc = "Projects I made :)"
          imgURL = "/img/profile.jpg"
        />
        <BlogLists data = {postListData} />
        </>
    )
}