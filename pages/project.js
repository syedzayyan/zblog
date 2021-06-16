import Card from "../components/Card";
import data from "../components/project_data.json"
import HeadTag from "../components/HeadTag";
export default function Project() {
    return (
        <div>
        <HeadTag title = "Syed Zayyan Masud's Projects" 
          desc = "Projects I made :)"
          imgURL = "/img/profile.jpg"
        />
            {data.map((datum, ind) =>
                <Card key={ind} img_url={datum.cardImage}>
                    <h1>{datum.cardTitle}</h1>
                    <a target="_blank" href = {datum.exampleLink}> Link</a>
                </Card>
            )}
        </div>
    )
}