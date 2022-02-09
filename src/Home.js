import Create from './Create';
import List from './List';

const Home = () => {

    return (<div className="home">
        <h1>Christmas Gift Lister: List Gifts like it's your first nature!</h1>

        <Create />
        <List />
    </div>);
}
 
export default Home;