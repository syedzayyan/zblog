import { IsPropertyDescriptor } from "es-abstract/es5"
import Head from "next/head"

const webURL = "https://www.syedzayyan.com"

export default function HeadTag(props){
    return(
        <Head>
        <title>{props.title}</title>
        <link rel="canonical" href={webURL} />

        <meta name="description" content={props.desc}></meta>

        <meta property="og:title" content={props.title} key="ogtitle" />
        <meta property="og:description" content={props.desc} key="ogdesc" />

        <meta name="twitter:card" content={props.desc} key="twcard" />

        {/* Open Graph */}
        <meta property="og:url" content={webURL} key="ogurl" />
        <meta property="og:image" content={props.imgURL} key="ogimage" />
        <meta property="og:site_name" content={props.title} key="ogsitename" />
        <meta property="og:title" content="Syed Zayyan Masud Personal Website" key="ogtitle" />
        <meta property="og:description" content={props.desc} key="ogdesc" />
      </Head>
    )
}