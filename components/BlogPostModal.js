import { useState } from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import Modal from "./Modal"
import { useFormik } from 'formik';

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

export default function BlogPostModal(props) {
    const [selectedTab, setSelectedTab] = useState("write");
    const [value, setValue] = useState(props.markdown);

    const { handleChange, values, setFieldValue,handleSubmit } = useFormik({
        initialValues: {
          title: props.title, 
          slug:props.slug,
          markdown:props.markdown, 
          tags:props.tags, 
          status:props.status, 
          headerImage:props.headerImage, 
          desc:props.desc, 
          mailedStatus:props.mailedStatus,   
        },
        onSubmit: values => {
        values.markdown = value
        fetch("/api/post_blog", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({values})
        }).then(res => {
            if (res.ok) {
                console.log(res)
                window.location.reload()
            }
        });
        },
      });
      function customSlugHandler(e){
        const {value} = e.target;
        setFieldValue('title', value);
        setFieldValue('slug', value.toLowerCase().replaceAll(" ", "-"));
      }
    return (
            <Modal buttonText={props.btnText}>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h1>{props.btnText}</h1>
                    <label htmlFor="title">Title</label>
                    <input required = {true} onChange={customSlugHandler} value={values.title} name="title" className="form-control"></input><br></br>
                    <label htmlFor="slug">Slug</label>
                    <input required = {true} onChange={handleChange} value={values.slug} name="slug" className="form-control"></input><br></br>
                    <ReactMde
                        value={value}
                        onChange={setValue}
                        selectedTab={selectedTab}
                        onTabChange={setSelectedTab}
                        generateMarkdownPreview={markdown =>
                            Promise.resolve(converter.makeHtml(markdown))
                        }
                    />
                    <label htmlFor="tags">Tags</label>&nbsp;
                    <select className="form-select form-select-lg" name = "tags" onChange={handleChange} value={values.tags}>
                        <option defaultValue = {true} value = "Poetry">Poetry</option>
                        <option value = "Technology">Technology</option>
                        <option value = "Science">Science</option>
                        <option value = "Philosophy">Philosophy</option>
                        <option value = "Stories">Stories</option>
                        <option value = "IDONOTKNOW">IDONOTKNOW</option>
                        <option value = "Music And Film">Music And Film</option>
                    </select><br></br>
                    <label htmlFor="status">Status</label>&nbsp;
                    <select className="form-select form-select-lg" name = "status" onChange={handleChange} value={values.status}>
                        <option defaultValue = {true} value = "0">0</option>
                        <option value = "1">1</option>
                    </select><br></br>       
                    <label htmlFor="headerImage">Header Image URL</label>
                    <input onChange={handleChange} value={values.headerImage} name="headerImage" className="form-control"></input><br></br>
                    <label htmlFor="desc">Description</label>
                    <input onChange={handleChange} value={values.desc} name="desc" className="form-control"></input><br></br>
                    <label htmlFor="mailedStatus">Mailed Status</label>&nbsp;
                    <select className="form-select form-select-lg" name = "mailedStatus" onChange={handleChange} value={values.mailedStatus}>
                        <option defaultValue = {true} value = "0">0</option>
                        <option value = "1">1</option>
                    </select><br></br>                    
                    <input type="submit"></input>
                </div>
                </form>
            </Modal>
    )
}