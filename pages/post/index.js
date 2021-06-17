import { withIronSession } from "next-iron-session";
import "react-mde/lib/styles/css/react-mde-all.css";
import BlogPost from "../../components/BlogPost"
import BlogPostList from "../../components/BlogPostList"
import getConfig from 'next/config'
import db from "../../db"

const { serverRuntimeConfig } = getConfig()

export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    var user = req.session.get("user");
    if (!user) {
      return {
        redirect: {
          permanent: false,
          destination: "/post/signin",
        },
        props:{},
      };
    }
    var params = {
      TableName: 'BLOG_Z',
    }
    const { Items } =  await db.scan(params)
    const postListData = Items
    return {
      props: { user, postListData }
    };
  },
  {
    cookieName: "SYEDZAYYAN",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: serverRuntimeConfig.appSecret
  }
);

export default function POST(props) {
  return (
    <div>
      <h1></h1>
      <BlogPost user = {props.user}/>
      <br></br>
      <BlogPostList data = {props.postListData}/>
    </div>
  )
};
