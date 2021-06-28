import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Product from '../../modules/product';
import Select from '../select';
import Loading from '../loading';
import gsap from "gsap";

const ProductList = ({ products }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([products]);
  const [sortDown, setSortDown] = useState(true);
  const node = useRef();
  const q = gsap.utils.selector(node);
  const timeline = gsap.timeline({});

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const change = (e) => {
    const dataCopy = [...data];
  
    if (e !== 'default') {
      if (!sortDown) {
        setData(products.sort((a, b) => (parseFloat(a.price) - parseFloat(b.price))));
      } else {
        setData(products.sort((a, b) => (parseFloat(b.price) - parseFloat(a.price))));
      }
      setSortDown((prev) => !prev);
      setData(dataCopy);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      timeline.fromTo(q(".gf-product-list-item"), {
        y: 200,
        opacity: 0
      },
      {
        y: 0, 
        opacity: 1, 
        ease: "expo.out",
        duration: 0.9, 
        stagger: 0.1
      }, 0.25);
    }
  }, [q, timeline, isLoading]);

  return (
    <section className="gf-container">
      <div className="gf-product-list-header">
        <h2 className="gf-h1">Products</h2>
        <Select handleOnChange={(e) => change(e)} />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ul className="gf-product-list" ref={node}>
            {products.map((product) => (
              <li key={product.id} className="gf-product-list-item">
                <Product {...product} />
              </li>
            ))}
          </ul>
          <div className="gf-load-more-button-wrapper">
            <button className="gf-load-more-button gf-button">Load more</button>
          </div>
        </>
      )}
    </section>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
