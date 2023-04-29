import errorImg from '../../img/error404travolta2.gif';

const Page404 = () => {

    const style = {
        height: '400px',
        margin: '0 auto',
        display: 'block',
    };

    return (
        <main>
            <img src={errorImg} alt="error" style={style}/>
        </main>
    );
};

export default Page404;