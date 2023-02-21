import Footer from "../Footer";
import Header from "../Header";
import './style.css';


const PageWrapper = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default PageWrapper;