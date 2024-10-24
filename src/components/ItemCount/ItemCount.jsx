export default function ItemCount(){ 
    return (
        <>
        <div className="container mt-5">
            <div className="d-flex justify-content-center align-items-center">
                
                <button className="btn btn-outline-danger me-2" onClick="decrement()">
                    <i className="fas fa-minus"></i>
                </button>
                
            
                <span id="quantity" className="mx-3 fs-4">0</span>
                
                <button className="btn btn-outline-success ms-2" onClick="increment()">
                    <i className="fas fa-plus"></i>
                </button>
            </div>

            <div className="text-center mt-3">
                <button className="btn btn-primary">
                    <i className="fas fa-shopping-cart"></i> Agregar al carrito
                </button>
            </div>
        </div>
        
        </>
    );
}