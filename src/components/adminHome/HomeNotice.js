import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { HomeNoticeWrap } from "../../styles/AdminHomeStyle";
import { getMainNoticeList } from "../../api/adminHomeAxios";

const HomeNotice = () => {
  const [noticeList, setNoticeList] = useState([]);

  // // 공지사항 개수 제한
  // const maxVisibleLists = 8;
  // const importantListCount = noticeList.imptList?.length;
  // const normalListViewCount = maxVisibleLists - importantListCount;

  useEffect(() => {
    getMainNoticeList(setNoticeList);
  }, []);

  return (
    <HomeNoticeWrap>
      <Link to="/notice" className="notice-wrap-title">
        <h3>
          공지사항
          <FontAwesomeIcon icon={faChevronRight} className="icon-arrow" />
        </h3>
      </Link>
      <div className="notice-wrap">
        <ul className="notice-title-wrap">
          <li className="table-numer">번호</li>
          <li className="table-title">제목</li>
          <li className="table-creationdate">등록일</li>
          <li className="table-views">조회수</li>
        </ul>
        <div className="notice-list-wrap">
          {noticeList.imptList?.length > 0 &&
            noticeList.imptList.map(item => (
              <ul className="important-notice" key={item.noticeId}>
                <li>
                  <span>중요</span>
                </li>
                <li>{item.title}</li>
                <li>{item.createdAt}</li>
                <li>{item.hits}</li>
              </ul>
            ))}
          {noticeList.normalList?.length > 0 &&
            noticeList.normalList.map(item => (
              <ul key={item.noticeId}>
                <li>{item.noticeId}</li>
                <li>{item.title}</li>
                <li>{item.createdAt}</li>
                <li>{item.hits}</li>
              </ul>
            ))}
        </div>
      </div>
    </HomeNoticeWrap>
  );
};

export default HomeNotice;