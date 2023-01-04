import "./styles.css";
import data from "./data/products_kabum.json";
import "bootstrap/dist/css/bootstrap.min.css";

const columnCards = [
  "col-xl-4",
  "col-lg-4",
  "col-md-6",
  "col-sm-6",
  "col-xs-6",
  "mb-4",
  "d-flex",
  "align-items-stretch"
];

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p className="py-2">Total Produtos: {data.length}</p>
        </div>
      </div>
      <div className="row">
        {data.map((item, i) => (
          <div className={columnCards.join(" ")} key={i}>
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
                    target="_blank"
                  >
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
