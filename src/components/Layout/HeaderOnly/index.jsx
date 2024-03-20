import Header from '../components/Header';

const HeaderOnly = ({ children }) => {
    return (
        <div>
            <div className="container">
                <Header></Header>
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default HeaderOnly;
