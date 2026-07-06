import {Header} from '../components/Header';
import './PageNotFound.css';

export function PageNotFound() {
    return (
        <>
            <title>404 Page Not Found</title>
            <Header />
            <p className="page404">Page not found</p>
        </>
    )
}