import MyProjectFilter from './MyProjectFilter';
import MyProjectTotal from './MyProjectTotal';

export default function MyProjectMain() {
    return (
        <section id="myProjectMain" className='contPadding'>
            <MyProjectFilter />
            <MyProjectTotal />
        </section>
    );
}