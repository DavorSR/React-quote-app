import react, {Component} from 'react'
import './addQuote.css'
class PostForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            author:  '',
            content: '',
            tags: ''
        }

    }
}

changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
}

submitHandler = e =>{
    e.preventDefault();
    console.log(this.state)
}

const {author, content, tags} = this.state

return(
   <div>
   <form onSubmit={this.submitHandler}>
        <input type="text" name='author' value={author} onChange={this.changeHandler} />
        <textarea name="content" name="content" cols="30" rows="10" value={content} onChange={this.changeHandler}></textarea>
        <input type="text"  name='tags' value={tags} onChange={this.changeHandler}/>
        <button type='submit'>Submit</button>

   </form>
   </div>
)
    
