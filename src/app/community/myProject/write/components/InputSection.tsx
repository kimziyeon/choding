type InputSectionType = {
    classname: string,
    title: string
}

export default function InputSection({ classname, title }: InputSectionType) {
    return (
        <section className={classname}>
            <div className='topCont'>
                <b className='titleBoldGray'>{title}</b>
            </div>
            <input type="text" name={title} />
        </section>
    )
}