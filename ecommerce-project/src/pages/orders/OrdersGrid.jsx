
import { Fragment } from "react";
import BuyAgainIcon from '../../assets/images/icons/buy-again.png';
import { Link } from 'react-router';
import { OrdersHeader } from "./OrdersHeader";
import { OrderDetailsGrid } from "./OrderDetailsGrid";

export function OrdersGrid({ orders, loadCart }) {
    return (
        <div className="orders-grid">
            {orders.map((order) => {
                return (
                    <div key={order.id} className="order-container">
                        <OrdersHeader order={order}/>

                        <OrderDetailsGrid order={order} loadCart={loadCart} />

                    </div>
                );
            })}
        </div>
    );
}