import { CardReport } from './CardReport';
import { Card1 } from './Card1';
import '../styles/App.css';

function App(props) {
    const list = props.list
    return ( <
            div className = 'App' >
            <
            CardReport / > {
                list.map((cartas) =>
                    <
                    Card1 key = { cartas.id }
                    hobby = { cartas.hobby }
                    hour = { cartas.hour }
                    last = { cartas.last }
                    theme = { cartas.theme }
                    imagenes = { cartas.img }
                    />)}    <
                    /div>




                );
            }

            export default App;