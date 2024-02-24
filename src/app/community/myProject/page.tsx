import MyProjectFilter from './myProjectFilter';
import MyProjectTotal from './myProjectTotal';

export default function MyProjectMain() {
    return (
    <section id="myProjectMain" className='contPadding'>
        <MyProjectFilter />
        <MyProjectTotal/>
    </section>
    );
}