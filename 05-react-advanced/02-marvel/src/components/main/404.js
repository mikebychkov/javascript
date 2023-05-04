import Helmet from 'react-helmet';
import errorImg from '../../img/error404travolta2.gif';

const Page404 = () => {

    const style = {
        height: '400px',
        margin: '0 auto',
        display: 'block',
    };

    return (
        <main>
            <Helmet>
                <title>Marvel information not found</title>
                <meta name="Marvel comics information not found" content="Marvel comics information not found" />
            </Helmet>
            <img src={errorImg} alt="error" style={style}/>
        </main>
    );
};

export default Page404;