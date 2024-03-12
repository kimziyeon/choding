"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ArrowRight from '@/assets/arrowRight.svg';
import './myProjectBest.scss';
import MyProjectSlide from '../components/MyProjectSlide';
import serverStore from '@/lib/server/serverStore';

export default function MyProjectBest() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await serverStore('get', 'myProject');
      if (response) {
        const sortedProjects = sortProjectsByLikesAndComments(response.data);
        setProjects(sortedProjects);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const sortProjectsByLikesAndComments = (projects) => {
    return projects.sort((a, b) => {
      if (a.like.length === b.like.length) {
        return b.comments.length - a.comments.length;
      }
      return b.like.length - a.like.length;
    });
  };

  const handleClickBestFigure = () => {
    if(projects.length > 0) {
      router.push(`/community/myProject/${projects[0].postId}`);
    }
  };

  return (
    <section id="communityMyProjectContainer" className="communityContainer">
      <header className="communityContHeader">
        <h2 className="containerTitle">최근 핫한 프로젝트</h2>
        <Link href='/community/myProject' className='more'>더보기
          <Image
            src={ArrowRight}
            alt='arrow image'
            width={20} height={20}
          />
        </Link>
      </header>
      <section className="containerContents">
        { projects.length > 0 && 
          <figure className='ccitem best1' onClick={handleClickBestFigure}>
            <img src={projects[0].image} alt="" />
            <figcaption>
              <h3>{projects[0].title}</h3>
              <div className='bottom'>
                <p className='name'>{projects[0].name}</p>
                <span className='like'>♥ {projects[0].like.length}</span>
              </div>
            </figcaption>
          </figure>
        }
        <MyProjectSlide slidePost={projects.slice(1)} />
      </section>
    </section>
  );
}
