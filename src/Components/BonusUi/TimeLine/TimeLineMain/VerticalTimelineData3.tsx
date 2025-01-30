import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { TimeLineData3 } from "@/utils/Constant";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Badge } from "reactstrap";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import { CarouselDataList } from "@/Data/BonusUi/TimeLine/TimeLineData";

const VerticalTimelineData3 = () => {
const CarouselSpanText: string = "Spend some time looking up current design trend.";

  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img cd-picture bg-success bounce-in">
        <i className="icon-image" />
      </div>
      <div className="cd-timeline-content bounce-in">
        <div className="timeline-wrapper">
          <Badge color="info">Designer</Badge>
        </div>
        <h4 className="m-0 vertical-timeline-element-subtitle">Research about most recent design trends.</h4>
        <p className="mb-2">{CarouselSpanText}</p>
        <Swiper width={615} modules={[Pagination, Navigation]} navigation pagination={{ clickable: true }} loop={true} slidesPerView={"auto"}>
          {CarouselDataList.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={`${ImagePath}/${item.image}`} alt={`carousel-item-${index}`} className="d-block" width={615} height={313} />
            </SwiperSlide>
          ))}
        </Swiper>
        <span className="cd-date">April 23 2022</span>
      </div>
    </div>
  );
};

export default VerticalTimelineData3;
