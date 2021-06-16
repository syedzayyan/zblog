import Card from "../components/Card";
import data from "../components/project_data.json"
import HeadTag, {picURL} from "../components/HeadTag";

export default function Project() {
    return (
        <div>
        <HeadTag title = "Syed Zayyan Masud's Projects" 
          desc = "Projects I made :)"
          imgURL = {picURL}
        />
        <h1>Projects</h1>
            {data.map((datum, ind) =>
                <Card key={ind} img_url={datum.cardImage}>
                    <h2>{datum.cardTitle}</h2>
                    <a target="_blank" href = {datum.exampleLink}> Link</a>
                </Card>
            )}
        </div>
    )
}