import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const columnCards = [
  'col-xl-4',
  'col-lg-4',
  'col-md-6',
  'col-sm-6',
  'col-xs-6',
  'mb-4',
  'd-flex',
  'align-items-stretch',
];

const data = require('./data/products_kabum.json');
const limit = 6;
const pages = Math.ceil(data.length / limit);

export default function App() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fnPagination(data, page, limit);
  }, [page]);

  const totalPage = () => {
    const arrPages = [];
    for (let i = 1; i <= pages; i++) {
      arrPages.push(i);
    }
    return arrPages;
  };

  const fnPagination = (items, pageActual, limitItems) => {
    let result = [];
    let totalPage = Math.ceil(items.length / limitItems);
    let count = pageActual * limitItems - limitItems;
    let delimiter = count + limitItems;
    if (pageActual <= totalPage) {
      for (let i = count; i < delimiter; i++) {
        if (items[i] != null) {
          result.push(items[i]);
        }
        count++;
      }
    }
    setProducts(result);
    return;
  };

  const fnChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-6">
          <p className="py-2">Total Produtos: {data.length}</p>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-end">
            <Pagination count={pages} page={page} onChange={fnChangePage} />
          </div>
        </div>
      </div>
      <div className="row">
        {products.map((item, i) => (
          <div className={columnCards.join(' ')} key={i}>
            <div className="card">
              <div className="box-img">
                <img src={item.url_image} alt={item.description} />
              </div>
              <div className="card-body p-0">
                <div className="card-text">{item.description}</div>
              </div>
              <div className="card-footer p-0">
                <div className="prices price_old">{item.price_old}</div>
                <div className="prices price_new">{item.price_new}</div>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div className="price_method">{item.price_method}</div>
                  <a
                    href={item.link_product}
                    className="btn btn-link"
                    role="button"
                    target="_blank">
                    Acessar
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
