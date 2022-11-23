import styles from '../styles/Home.module.css';
import products from '../json/products.json';

export default function Home() {
  return (
   <>
      <section>

      </section>
      <section>
         <Items/>
      </section>
    </>
  )
}

function Items() {
   return (
      <div className={styles.container}>
         <main className={styles.main}>
            <div className={styles.grid}>
               {products.map(product => {
               return (
               <div key={product.id} className={styles.card}>
                  <img className={styles.thumbnail} src={product.image} alt={`Preview of ${product.title}`} />
                  <div className={styles.cardDetail}>
                     <h3>{product.title}</h3>
                     <p>{product.description}</p>
                     <p>${product.price}</p>
                     <button className="snipcart-add-item"
                     data-item-id={product.id}
                     data-item-image={product.image}
                     data-item-name={product.title}
                     data-item-price={product.price}
                     >
                     Add to Cart
                     </button>
                  </div>
               </div>
               );
               })}
            </div>
         </main>
      </div>
   )
 }