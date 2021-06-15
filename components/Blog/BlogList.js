export default function BlogLists({data}){
    return(
        <div>
            {data.map((datum, ind) => 
                <a key = {ind} href = {`/blog/${datum.POST_ID}`}>
                <div className = "card">
                    <h1>{datum.TITLE}</h1><br></br>
                    <span>{datum.TAG}</span><br></br>
                    <span>{datum.CREATED_AT}</span>
                </div>
                </a>
            )}
            <style>
            {`
                .card{
                    background-color:var(--bg-primary);
                    border:solid 1px var(--text-secondary);
                    margin-top:5px;
                    border-radius:5px;
                }
            `}
            </style>
        </div>
    )
}