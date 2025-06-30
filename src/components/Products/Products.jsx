import './Products.css'
import Card  from '../Card/Card.jsx'

function Products() {

    return(
        <>
            <section className='galeria-container'> 
                <p>Eventos:</p>
        
                <section className='cards-container'>
                    <Card/>
                    <Card/>
                    <Card/>
                </section>
            </section>
        </>
    )
    
}

export default Products