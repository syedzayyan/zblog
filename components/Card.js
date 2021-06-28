import Image from "next/image";

export default function Card(props) {
    return (
        <div>
                    <div className="card">
                        {props.img_url === "" ? (null) : (
                            <div className="div-image-border">
                                <Image objectFit = "contain" layout = "fill" src={props.img_url} className="image" />
                            </div>
                        )}
                        &nbsp;
                        <div className = "text">
                            {props.children}
                        </div>
                    </div>
            <style>
                {`
                .card{
                    background-color:var(--bg-primary);
                    border:solid 1px var(--text-secondary);
                    margin-top:5px;
                    border-radius:5px;
                    padding:8px;
                    display:flex;
                    width:90vw;
                    flex-wrap:wrap;
                    align-items:center
                }
                .card-links{
                    text-decoration:none;
                    color:var(--text-secondary);
                }
                .card-links:hover{
                    color:var(--text-primary);
                }
                .div-image-border{
                    position: relative;
                    height:20vh;
                    width:20vw;
                    background-color:var(--bg-secondary);
                    flex-basis:20%;
                    flex-grow:5;
                }
                .text{
                    flex-basis:78%;
                }
                .image{
                    width:100%
                }
            `}
            </style>
        </div>
    )
}