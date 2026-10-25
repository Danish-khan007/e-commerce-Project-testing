import logo from "../assets/cart-empty.jpg";

import { useCart } from "../CartContext";

const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <main className="cart-page">
            <h1>Apka Khud ka cart 💕💕💕</h1>
            <div className="cart-items">
                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <img src={logo} alt="cart is empty" />
                        <h1> <i> Your cart is empty.</i></h1>
                    </div>
                ) : (
                    <>
                        {cart.map((item, index) => (
                            <div className="cart-item" key={`${item.id}-${index}`}>
                                <img
                                    className="cart-item-image"
                                    src={item.image}
                                    alt={item.name}
                                />
                                <h2>{item.name}</h2>
                                <p>₹{item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p className="item-total">Product total: ₹{item.price * item.quantity}</p>

                                <div className="cart-item-actions">
                                    <button type="button" onClick={() => removeFromCart(item.id)}>
                                        {" "}
                                        Remove from Cart{" "}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => alert("Congratulations")}
                                    >
                                        {" "}
                                        Buy Now{" "}
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="cart-total">
                            <h2>Total: ₹{total}</h2>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
};

export default Cart;
