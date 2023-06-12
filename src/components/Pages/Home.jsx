import { Link } from "react-router-dom"

function Home(){
    return (
        <div  >
            <h1 className=''>Ola, aqui ...</h1>
            <img width='400px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEuUZuONyp8ia4HkvbXniE24bL8W4BaVGFmyvXU-4oFxYjIQiZyQb3im6h22dXyTIgK0&usqp=CAU'/>
            <br />
            <br />
            <br />
            <Link className='link-decoration' to='/' ><h4>  Voltar</h4></Link>
        </div>
    )
}

export default Home