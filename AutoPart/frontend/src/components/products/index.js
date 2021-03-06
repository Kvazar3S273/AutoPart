import { useEffect, useState } from "react";
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Rating } from 'primereact/rating';
import { useSelector, useDispatch } from 'react-redux';
import { GetProducts } from "../../actions/products";
import { push } from 'connected-react-router';
import { ADD_TO_CARD } from '../../../constants/actionTypes';
import "./products.css";
import Card from "./Card/card";


const ProdList = () => {
    const [state, setState] = useState({
        visible: false
    });
    const [layout, setLayout] = useState('list');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        { label: 'Price High to Low', value: '!price' },
        { label: 'Price Low to High', value: 'price' },
    ];
    const dispatch = useDispatch();
    const { listproducts } = useSelector(state => state.prod);
    useEffect(() => {
        dispatch(GetProducts());

    }, []);

    const changeRout = () => {
        dispatch(push("/product/add"));
    }

    const AddToCard = (dataprod) => {

        console.log(dataprod.id);
        dispatch({ type: ADD_TO_CARD, dataprod: dataprod });
        setState({ visible: true });
    };

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        }
        else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    }

    const footer = (
        <div>
            <Button
                label='Повернутись до списку товарів'
                icon='pi pi-check'
                onClick={e => setState({ visible: false })}
            />
        </div>
    );

    const renderListItem = (dataprod) => {
        return (

            <div className="p-col-12">
                <div className="product-list-item">
                    <img src={`${dataprod.image}`} alt={dataprod.name} />
                    <div className="product-list-detail">
                        <div className="product-name">{dataprod.name}</div>
                        <div className="product-description">{dataprod.name}</div>
                        <Rating value={dataprod.rating} readOnly cancel={false}></Rating>
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{dataprod.id}</span>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">${dataprod.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" onClick={() => AddToCard(dataprod)} style={{ backgroundColor: '#DB7093' }} ></Button>

                    </div>
                </div>
            </div>
        );
    }

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }
        return renderListItem(product);
    }

    const renderHeader = () => {
        return (
            <div className="p-grid p-nogutter">
                <div className="p-col-6" style={{ textAlign: 'left' }}>
                    <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange} />
                </div>
                {<div className="p-col-6" style={{ textAlign: 'left', marginTop: '20px' }}>
                    <Button label="Add product" style={{ backgroundColor: '#FF00FF' }} onClick={changeRout}></Button>
                </div>}
            </div>
        );
    }

    const header = renderHeader();

    return (
        <>
            <Dialog
                header='Dialog'
                footer={footer}
                visible={state.visible}
                width='100px'
                modal={true}
                onHide={e => this.setState({ visible: false })}
                maximizable={false}
            >
                <Card />

            </Dialog>

            <div className="dataview-demo">
                <div className="card">
                    <DataView value={listproducts} layout={layout} header={header}
                        itemTemplate={itemTemplate} paginator rows={9}
                        sortOrder={sortOrder} sortField={sortField} />
                </div>
            </div>
        </>
    );

}
export default ProdList;