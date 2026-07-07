import {Header} from '../components/Header';
import './PageNotFound.css';

export function PageNotFound( {cart} ) {
    return (
        <>
            <title>404 Page Not Found</title>
            <Header cart={cart}/>
            <p className="page404">Page not found</p>
        </>
    )
}