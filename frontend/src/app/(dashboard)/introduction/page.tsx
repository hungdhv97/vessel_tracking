"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useFetchAboutPage } from "@/queries/introduction";

const IntroductionPage: React.FC = () => {
    const { data: aboutPage } = useFetchAboutPage();
    if (!aboutPage) return null;

    return (
        <div className="introduction-page max-w-7xl mx-auto p-4 space-y-8">
            <section>
                <h2 className="text-2xl font-bold text-center text-green-800 mb-4">Hình ảnh về bộ đội biên phòng</h2>
                <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={true}>
                    {aboutPage.carousel_images.map((image) => (
                        <div key={image.id}>
                            <img className="h-[40vh] md:h-[80vh] object-cover" src={image.image} alt={image.title} />
                            <p className="legend">{image.title}</p>
                        </div>
                    ))}
                </Carousel>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">Video về hoạt động của bộ đội biên
                    phòng</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {aboutPage.videos.map((video) => (
                        <div className="aspect-w-16 aspect-h-9" key={video.id}>
                            <video controls className="w-full h-full object-cover">
                                <source
                                    src={video.video_url || video.video_file || ""}
                                    type="video/mp4"
                                />
                            </video>
                            <p className="text-center mt-2">{video.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-center text-red-800 mb-4">{aboutPage.introduction.title}</h2>
                <p className="indent-8 text-lg leading-relaxed text-justify">
                    {aboutPage.introduction.content}
                </p>
            </section>
        </div>
    );
};

export default IntroductionPage;
                                                                                                                                                   