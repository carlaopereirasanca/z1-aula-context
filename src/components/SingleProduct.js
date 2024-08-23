
import './styles.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const SingleProduct = ( {prod} ) => {

    // Acessando o contexo, para recuperar o estado:
    const { carrinho, setCarrinho } = useContext(CartContext);
    // ... e só!!!!!!

    const adicionaCarrinho = () => {
        setCarrinho( [...carrinho, prod] );
    };

    const removeCarrinho = () => {
        setCarrinho( carrinho.filter( (c) => c.id !== prod.id) )  
    };

    return (

        <div className="products">

            <img src={prod.image} alt={prod.name} />
            <div className="productDesc">
                <span style={ {fontWeight:700} }>{prod.name}</span>
                <span> ${prod.price}</span>
            </div>

            {carrinho.some(item => item.id === prod.id) ? 
                ( <button className="add" onClick={ removeCarrinho }>
                    Retirar do carrinho
                </button> )
                :
                ( <button className="add" onClick={ adicionaCarrinho }>
                    Colocar no carrinho
                </button>)
            }
        </div>
    );
}

export default SingleProduct;
    