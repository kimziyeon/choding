import MyProjectFilter from './MyProjectFilter';
import MyProjectTotal from './MyProjectTotal';
import WriteMyProject from './components/WriteButton/WriteMyProject';
import './myProjectMain.scss';

export default function MyProjectMain() {
    return (
        <section id="myProjectMain" className='contPadding'>
            <MyProjectFilter />
            <MyProjectTotal />
            <WriteMyProject />
        </section>
    );
}