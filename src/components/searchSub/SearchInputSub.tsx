import Image from "next/image";
import SearchIconSVG from '@/essets/searchSub.svg'
import './searchIconSVG.scss'

export default function SearchInputSub() {
    return (
        <div id="searchInputSub">
                <Image
                src={SearchIconSVG}
                alt="검색 아이콘"
                width={20}
                height={20}
                />
        <input placeholder="검색어를 입력해주세요"/>
        </div>
    )
}