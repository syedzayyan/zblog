import BlogDetails from "../../components/Blog/BlogDetail";
import HeadTag, { picURL } from "../../components/HeadTag";
import { createClient } from "contentful"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_API_KEY
});

export const getStaticPaths = async () => {

  const res = await client.getEntries({ content_type: "title" })

  const paths = res.items.map((datum) => {
    return {
      params: { slug: datum.fields.slug }
    }
  })

  return {
    paths,
    fallback: `blocking`,
  }
}
export const getStaticProps = async ({ params }) => {
  const res = await client.getEntries(
    {
      content_type: "title",
      'fields.slug': params.slug
    })
  return {
    props: { data: res.items[0] },
    revalidate: 60
  }
}

export default function BlogDetailHigh({ data }) {
  return (
    <>
      <HeadTag title={data.fields.title}
        desc={data.fields.desc}
        imgURL={data.HEADER_IMAGE === undefined ? (picURL) : ("https:" + data.fields.titleImage.fields.file.url)}
      />
      <BlogDetails data={data} />
    </>
  )
}

