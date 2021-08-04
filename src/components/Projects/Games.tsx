import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import { gamesData } from "data/games";
import Image from "next/image";
import Link from "next/link";

SwiperCore.use([Navigation]);

export const Games = () => {
  return (
    <div className='w-full'>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {gamesData.map(game => (
          <SwiperSlide key={game.id}>
            <div className='mx-10 my-5'>
              <div className='relative flex justify-center mb-2'>
                <Link href={game.code} passHref>
                  <a className='overflow-hidden bg-black relative'>
                    <Image
                      src={game.image}
                      alt='ds'
                      width={300}
                      height={200}
                      placeholder='blur'
                      blurDataURL={game.image}
                      className='absolute inset-0 w-full h-full object-cover rounded-md transition opacity-80 hover:opacity-95'
                    />
                  </a>
                </Link>
              </div>
              <div className='flex flex-col justify-center items-center '>
                <h3 className='text-xl text-red-600 font-semibold'>
                  {game.name}
                </h3>
                <p className='text-purple-100'>{game.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
